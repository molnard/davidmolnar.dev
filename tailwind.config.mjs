/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        paper: '#F8F5F0',
        cream: '#F1EBE2',
        ink: '#1A1816',
        muted: '#5A5249',
        forest: {
          DEFAULT: '#1F3A2E',
          dark: '#162A21',
          light: '#2E5744',
        },
        amber: {
          DEFAULT: '#E8A33D',
          dark: '#C98822',
          light: '#F5C36A',
        },
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
    },
  },
  plugins: [],
};
