const SHEET_URL = 'https://script.google.com/macros/s/AKfycbzKQRNlBuAJ04OudIVUpSCOpcyKZhDixqMI9UCQQVvvPtEWQC0ica9RczBToR_03oCG/exec';

class SupabaseQueryBuilder {
  table: string;
  constructor(table: string) {
    this.table = table;
  }

  select(fields?: string): any {
    const table = this.table;
    const request = async () => {
      try {
        const url = `${SHEET_URL}?action=get&table=${table}`;
        const res = await fetch(url, { cache: 'no-store' });
        const text = await res.text();
        if (text.includes('<html')) return { data: [], error: null };
        const json = JSON.parse(text);
        if (json.error) return { data: null, error: { message: json.error } };

        const parsedData = (json.data || []).map((row: any) => {
          const parsedRow = { ...row };
          for (const key in parsedRow) {
            if (typeof parsedRow[key] === 'string' && (parsedRow[key].startsWith('[') || parsedRow[key].startsWith('{'))) {
              try { parsedRow[key] = JSON.parse(parsedRow[key]); } catch (e) { }
            }
          }
          return parsedRow;
        });

        return { data: parsedData, error: null };
      } catch (e: any) {
        return { data: null, error: e };
      }
    };

    const result = {
      then: (resolve: any, reject: any) => request().then(resolve, reject),
      catch: (reject: any) => request().catch(reject),
      single: () => new Promise((resolve, reject) => {
        request().then((res: any) => {
          if (res.data && res.data.length > 0) {
            resolve({ data: res.data[0], error: null });
          } else {
            resolve({ data: null, error: res.error || { message: 'Not found' } });
          }
        }).catch(reject);
      }),
      order: (field: string, options: any) => {
        return {
          then: (resolve: any, reject: any) => {
            request().then((res: any) => {
              if (res.data && options?.ascending === false) {
                res.data = [...res.data].reverse();
              }
              resolve(res);
            }).catch(reject);
          }
        };
      }
    };
    return result;
  }

  insert(rows: any[]): any {
    const table = this.table;
    const request = async () => {
      try {
        const safeData = { ...rows[0] };
        for (const key in safeData) {
          if (typeof safeData[key] === 'object' && safeData[key] !== null) {
            safeData[key] = JSON.stringify(safeData[key]);
          }
        }
        const res = await fetch(SHEET_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({ table, action: 'insert', data: safeData })
        });
        const text = await res.text();
        if (text.includes('<html')) throw new Error('CORS or App Script permission error.');
        const json = JSON.parse(text);
        return { data: [safeData], error: json.error ? { message: json.error } : null };
      } catch (e: any) {
        return { data: null, error: e };
      }
    };

    const builder = {
      select: () => ({
        single: () => new Promise((resolve, reject) => {
          request().then((res: any) => {
            if (res.data && res.data.length > 0) {
              resolve({ data: res.data[0], error: res.error });
            } else {
              resolve({ data: null, error: res.error || { message: 'Insert failed' } });
            }
          }).catch(reject);
        }),
        then: (resolve: any, reject: any) => request().then(resolve).catch(reject)
      }),
      then: (resolve: any, reject: any) => request().then(resolve).catch(reject)
    };
    return builder;
  }

  delete(): any {
    const table = this.table;
    return {
      eq: (field: string, val: string) => {
        const request = async () => {
          try {
            const res = await fetch(SHEET_URL, {
              method: 'POST',
              headers: { 'Content-Type': 'text/plain;charset=utf-8' },
              body: JSON.stringify({ table, action: 'delete', id: val })
            });
            const text = await res.text();
            if (text.includes('<html')) throw new Error('CORS or App Script permission error.');
            const json = JSON.parse(text);
            return { data: null, error: json.error ? { message: json.error } : null };
          } catch (e: any) {
            return { data: null, error: e };
          }
        };
        return new Promise((resolve, reject) => request().then(resolve).catch(reject));
      }
    };
  }

  update(updatedObj: any): any {
    const table = this.table;
    return {
      eq: (field: string, val: string) => {
        const request = async () => {
          try {
            const safeData = { ...updatedObj };
            for (const key in safeData) {
              if (typeof safeData[key] === 'object' && safeData[key] !== null) {
                safeData[key] = JSON.stringify(safeData[key]);
              }
            }
            await fetch(SHEET_URL, {
              method: 'POST',
              headers: { 'Content-Type': 'text/plain;charset=utf-8' },
              body: JSON.stringify({ table, action: 'delete', id: val })
            });
            const res = await fetch(SHEET_URL, {
              method: 'POST',
              headers: { 'Content-Type': 'text/plain;charset=utf-8' },
              body: JSON.stringify({ table, action: 'insert', data: safeData })
            });
            const text = await res.text();
            if (text.includes('<html')) throw new Error('CORS or App Script permission error.');
            const json = JSON.parse(text);
            return { data: [safeData], error: json.error ? { message: json.error } : null };
          } catch (e: any) {
            return { data: null, error: e };
          }
        };
        return {
          select: () => new Promise((resolve, reject) => request().then(resolve).catch(reject)),
          then: (resolve: any, reject: any) => request().then(resolve).catch(reject)
        };
      }
    };
  }
}

const uploadedFilesMap: Record<string, string> = {};

export const supabase = {
  auth: {
    signInWithPassword: async ({ email, password }: any) => {
      if (email === 'admin@eyenet.com' && password === 'admin123') {
        return { data: { user: { email } }, error: null };
      }
      return { data: null, error: { message: 'Invalid credentials. Try admin@eyenet.com / admin123' } };
    }
  },
  from: (table: string) => new SupabaseQueryBuilder(table),
  storage: {
    from: (bucket: string) => ({
      upload: async (path: string, file: any) => {
        try {
          const reader = new FileReader();
          const base64Promise = new Promise<string>((resolve) => {
            reader.onloadend = () => {
              const result = reader.result as string;
              resolve(result.includes(',') ? result.split(',')[1] : result);
            };
            reader.readAsDataURL(file);
          });
          const base64String = await base64Promise;

          const res = await fetch(SHEET_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({
              action: 'upload',
              table: 'courses', // The Google Apps Script currently expects 'courses' for all uploads in this project
              filename: path.split('/').pop(),
              mimeType: file.type,
              base64: base64String
            })
          });

          const text = await res.text();
          if (text.includes('<html')) throw new Error("CORS or Google Apps Script permission error.");
          const json = JSON.parse(text);
          if (json.error) throw new Error(json.error);

          // Map the local filepath to the remote Google Drive URL
          uploadedFilesMap[path] = json.url;
          return { data: { path }, error: null };
        } catch (error: any) {
          console.error("Upload error:", error);
          return { data: null, error };
        }
      },
      getPublicUrl: (path: string) => {
        const publicUrl = uploadedFilesMap[path] || 'https://via.placeholder.com/400x300?text=Uploaded+File';
        return { data: { publicUrl } };
      }
    })
  }
};