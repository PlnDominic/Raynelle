import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        assistant: ['var(--font-assistant)', 'system-ui', 'sans-serif'],
        merriweather: ['var(--font-merriweather-sans)', 'sans-serif'],
        mono: ['var(--font-anonymous-pro)', 'monospace'],
      },
      colors: {
        ink: '#16181f',
        navy: {
          DEFAULT: '#2a3344',
          dark: '#1d2533',
          deeper: '#212a39',
        },
        cream: {
          DEFAULT: '#faf8f4',
          warm: '#f1ece3',
          mid: '#e7ddcf',
        },
        muted: {
          DEFAULT: '#8a8e98',
          light: '#4c515d',
        },
        border: '#e7e5e0',
        accent: {
          DEFAULT: '#cdbba4',
          light: '#d8cbb8',
          subtle: '#d9d6cf',
        },
      },
      keyframes: {
        mrFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'mrFloat 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
