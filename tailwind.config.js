/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm20': '320px',  // Экраны шириной от 320px
        'sm75': '375px',  // Экраны шириной от 375px
        'sm25': '425px',  // Экраны шириной от 425px
        'xl40': '1440px', // Экраны шириной от 1440px
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 40s linear infinite', // Анимация автоскролла
      },
    },
  },
  plugins: [],
};
