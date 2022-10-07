/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    colors: {
      "light-cyan": "hsl(193, 38%, 86%)",
      "neon-green": "hsl(150, 100%, 66%)",
      "grayish-blue": "hsl(217, 19%, 38%)",
      "dark-grayish-blue": "hsl(217, 19%, 24%)",
      "dark-blue": "hsl(218, 23%, 16%)",
    },
    extend: {
      fontFamily: {
        body: "'Manrope', sans-serif",
      },
    },
  },
  plugins: [],
};
