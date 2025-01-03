module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], 
  theme: {
    extend: {
      colors: {
        darkBlue: '#0C385B',
        darkIndigo: '#18184C',
      },
      fontSize: {
        xxs: '0.75rem',
        xl4_5: '2.5rem',
      },
      animation: {
        drift: 'drift 3s ease-in-out infinite alternate',
        scale: 'scale 0.6s ease-in',
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateX(-10px)' }
        },
        scale: {
          '0%': { transform: 'none' },
          '100%': { transform: 'scale(1.3)' },
        },
      },      
    },
  },
  plugins: [],
};
