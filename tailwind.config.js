/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'backgroundBlue': '#0C4CA3',
        'gold': '#F9A605',
        "profitGreen": "#31D209",
      },
      fontFamily: {
        display: ["OpenSans-Regular", "sans-serif"],
        body: ["OpenSans-Regular", "sans-serif"],
        blight: ["OpenSans-Light", "sans-serif"],
        bregular: ["OpenSans-Regular", "sans-serif"],
        bmedium: ["OpenSans-Medium", "sans-serif"],
        bsemibold: ["OpenSans-SemiBold", "sans-serif"],
        bbold: ["OpenSans-Bold", "sans-serif"],
        bextrabold: ["OpenSans-ExtraBold", "sans-serif"],
      },
      fontSize: {
        'normal': '12px',
        'regular': '20px',
        'medium': '14px',
        '3xl': '32px',
        "large": "48px",
      }
    },
  },
  plugins: [],
}

