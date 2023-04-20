export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        default: "#262626",
        contrast: "#FFFFFF",
        main: "#C1121F",
        dark: "#610910",
        light: "#FF303E"
      },
      error: {
        light: "#EF5350"
      },
      black: "black"
    },
    fontWeight: {
      thin: '100',
      light: '300',
      normal: '400',
      semibold: '600',
      bold: '700',
    },

    extend: {
      fontFamily: {
        primary: ['montserrat', 'sans-serif'],
      },
      dropShadow: {
        'exl': '0 8px 6px rgba(0, 0, 0, 0.5)'
      }
    },
  },
  plugins: [],
}

