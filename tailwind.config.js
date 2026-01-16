/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf8f6',
          100: '#f2ebe4',
          200: '#e5d6c8',
          300: '#d4baa5',
          400: '#c19a7e',
          500: '#b38262',
          600: '#a67054',
          700: '#8a5b47',
          800: '#714c3e',
          900: '#5d4135',
          950: '#31211b',
        },
        secondary: {
          50: '#fdfbf7',
          100: '#f9f5eb',
          200: '#f2e8d5',
          300: '#e8d5b5',
          400: '#dcbd8e',
          500: '#d1a66d',
          600: '#c4915a',
          700: '#a3754b',
          800: '#845f42',
          900: '#6c4f38',
          950: '#3a291c',
        },
        accent: {
          50: '#fdf9ed',
          100: '#f9eecb',
          200: '#f3dc92',
          300: '#ecc559',
          400: '#e6b035',
          500: '#d99621',
          600: '#c0741a',
          700: '#9f5419',
          800: '#82431b',
          900: '#6b3819',
          950: '#3d1c0a',
        },
        dark: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#1a1a1a',
          950: '#0d0d0d',
        },
      },
      fontFamily: {
        'heading': ['Playfair Display', 'Georgia', 'serif'],
        'body': ['Lato', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
