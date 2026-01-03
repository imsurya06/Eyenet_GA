import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground)",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground)",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        body: ['Source Sans 3', 'sans-serif'],
      },
      fontSize: {
        // Desktop Headings (Apple Design System Style)
        'h1-desktop': ['4rem', { lineHeight: '110%', letterSpacing: '-0.02em' }],
        'h2-desktop': ['3rem', { lineHeight: '110%', letterSpacing: '-0.01em' }],
        'h3-desktop': ['2.25rem', { lineHeight: '120%', letterSpacing: '-0.01em' }],
        'h4-desktop': ['1.75rem', { lineHeight: '120%' }],
        'h5-desktop': ['1.5rem', { lineHeight: '120%' }],
        'h6-desktop': ['1.25rem', { lineHeight: '120%' }],

        // Mobile Headings (Apple Design System Style)
        'h1-mobile': ['2.5rem', { lineHeight: '110%', letterSpacing: '-0.02em' }],
        'h2-mobile': ['1.75rem', { lineHeight: '120%', letterSpacing: '-0.01em' }],
        'h3-mobile': ['1.5rem', { lineHeight: '120%' }],
        'h4-mobile': ['1.25rem', { lineHeight: '130%' }],
        'h5-mobile': ['1.125rem', { lineHeight: '140%' }],
        'h6-mobile': ['1rem', { lineHeight: '140%' }],

        // Body Text Sizes (Mobile-first definitions)
        'text-large': ['1.125rem', { lineHeight: '160%' }], // Reduced from 1.25rem
        'text-medium': ['1rem', { lineHeight: '160%' }], // Reduced from 1.125rem
        'text-regular': ['0.875rem', { lineHeight: '160%' }], // Reduced from 1rem
        'text-small': ['0.75rem', { lineHeight: '160%' }], // Reduced from 0.875rem
        'text-tiny': ['0.675rem', { lineHeight: '160%' }], // Reduced from 0.75rem

        // Desktop overrides for body text (will be applied via globals.css)
        'desktop-text-large': ['1.75rem', { lineHeight: '160%' }],
        'desktop-text-medium': ['1.5rem', { lineHeight: '160%' }],
        'desktop-text-regular': ['1.125rem', { lineHeight: '160%' }],
        'desktop-text-small': ['1rem', { lineHeight: '160%' }],
        'desktop-text-tiny': ['0.875rem', { lineHeight: '160%' }],
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0) rotate(0deg)" },
          "10%": { transform: "translateX(-5px) rotate(-4deg)" },
          "20%": { transform: "translateX(5px) rotate(4deg)" },
          "30%": { transform: "translateX(-5px) rotate(-4deg)" },
          "40%": { transform: "translateX(5px) rotate(4deg)" },
          "50%": { transform: "translateX(-5px) rotate(-4deg)" },
          "60%": { transform: "translateX(5px) rotate(4deg)" },
          "70%": { transform: "translateX(-5px) rotate(-4deg)" },
          "80%": { transform: "translateX(5px) rotate(4deg)" },
          "90%": { transform: "translateX(-5px) rotate(-4deg)" },
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shake: "shake 0.8s infinite",
        float: 'float 3s ease-in-out infinite',
        scroll: 'scroll 40s linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;