/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        space: {
          bg: '#0b0f17',
          panel: 'rgba(255,255,255,0.06)'
        },
        cyber: {
          teal: '#00ffd1',
          violet: '#8a7dff',
          orange: '#ff8b3d'
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      perspective: {
        '1000': '1000px',
      }
    },
  },
  plugins: [],
};
