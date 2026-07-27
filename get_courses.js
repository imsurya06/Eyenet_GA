import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'kxgkc60l',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: false,
});

async function run() {
  const data = await client.fetch('*[_type == "course"]');
  console.log(data.map(c => ({ id: c._id, title: c.title, tag: c.tag })));
}

run();
