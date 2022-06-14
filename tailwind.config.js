/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        'lg': '1124px',
        'xl': '1440px',
        "2xl": "1636px",
      },
    },
    // fontFamily: {
    //   Poppins: ["Poppins, sans-serif"],
    // },
    extend: {
      colors: {
        "primary-red": "#ea5353", // Red: hsl(0, 78%, 62%)
        "primary-cyan": "#45d3d3", // Cyan: hsl(180, 62%, 55%)
        "primary-orange": "#fcaf4a", // Orange: hsl(34, 97%, 64%)
        "primary-blue": "	#549ef2", // Blue: hsl(212, 86%, 64%)
        "netral-dark-blue": "#4c4e61", // Very Dark Blue: hsl(234, 12%, 34%)
        "neutral-grayis-blue":"#a3a5ae", // Grayish Blue: hsl(229, 6%, 66%)
        "neutral-light-gray": "#fafafa", // Very Light Gray: hsl(0, 0%, 98%)

      },
    },
  },
  plugins: [],
}
