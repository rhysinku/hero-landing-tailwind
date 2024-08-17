/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // Include all HTML files in the root directory
    "./js/**/*.js", // Include all JS files in the `js` directory and subdirectories
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "custom-12": "repeat(12, minmax(0, 1fr))",
      },
      container: {
        center: true,
        padding: "1rem", // Optional: Add padding
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1240px",
          xl: "1240px",
          "2xl": "1770px",
        },
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      colors: {
        "white-gray": "#F8FAFB",
        primary: {
          100: "rgba(0, 126, 249, 0.1)",
          200: "rgba(0, 126, 249, 0.2)",
          300: "rgba(0, 126, 249, 0.3)",
          400: "rgba(0, 126, 249, 0.4)",
          500: "rgba(0, 126, 249, 0.5)",
          600: "rgba(0, 126, 249, 0.6)",
          700: "rgba(0, 126, 249, 0.7)",
          800: "rgba(0, 126, 249, 0.8)",
          900: "rgba(0, 126, 249, 0.9)",
          DEFAULT: "rgba(0, 126, 249, 1.0)",
        },
        secondary: {
          100: "rgba(3, 175, 115, 0.1)",
          200: "rgba(3, 175, 115, 0.2)",
          300: "rgba(3, 175, 115, 0.3)",
          400: "rgba(3, 175, 115, 0.4)",
          500: "rgba(3, 175, 115, 0.5)",
          600: "rgba(3, 175, 115, 0.6)",
          700: "rgba(3, 175, 115, 0.7)",
          800: "rgba(3, 175, 115, 0.8)",
          900: "rgba(3, 175, 115, 0.9)",
          DEFAULT: "rgba(3, 175, 115, 1.0)",
        },
      },
    },
  },
  plugins: [],
};
