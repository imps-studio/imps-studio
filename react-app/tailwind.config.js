/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './404.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        imps: {
          red:    '#B83A3A',
          deep:   '#8B2A2A',
          soft:   '#E8C5C5',
          wash:   '#FAF0F0',
          ember:  '#D96B3A',
        },
        ink: {
          0:   '#FFFFFF',
          50:  '#F7F8FA',
          100: '#EEF0F3',
          200: '#DCDFE5',
          300: '#B8BDC7',
          400: '#868D9B',
          500: '#5B626F',
          600: '#3D434E',
          700: '#282C34',
          800: '#181B21',
          900: '#0C0E12',
        },
      },
      fontFamily: {
        sans:  ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono:  ['"JetBrains Mono"', 'ui-monospace', 'SF Mono', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.035em',
        eyebrow:  '0.14em',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
};
