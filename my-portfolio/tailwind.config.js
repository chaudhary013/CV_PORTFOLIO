/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all files in the src folder with extensions
    './public/index.html',         // Include your index.html file
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        type: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { textShadow: '0 0 5px #fff, 0 0 10px #fff' },
          '100%': { textShadow: '0 0 10px #fff, 0 0 20px #fff' },
        },
      },
      animation: {
        'slide-in': 'slideIn 0.7s ease-out',
        'fade-in': 'fadeIn 1.5s ease-out',
        'rotate-360': 'rotate 1s linear infinite',
        type: 'type 4s steps(40, end) 1s forwards',
        float: 'float 3s ease-in-out infinite',
        glow: 'glow 1s ease-in-out infinite alternate',
      },
      
    },
  },
  plugins: [], // Add any Tailwind plugins here if necessary
};
