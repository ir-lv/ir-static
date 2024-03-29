/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    fontFamily: {
      sans: ["Merriweather-Light, sans-serif"],
      serif: ["BreuerCondensed-Regular, serif"],
    },
    container: {
      center: true,
    },
    extend: {
      screens: {
        xl: "1180px",
      },
      boxShadow: {
        'ir-default': 'rgba(50, 50, 105, 0.15) 0px 1px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px',
      },

      fontSize: {
        "card-lead": "15px",
        md: ["1.125rem", "1.125"],
        xl: ["1.375rem", "1.87rem"],
      },
      colors: {
        "ir-red": "#ED2926",
        "ir-red-dark": "#D41714",
        "ir-gray-80": "#3A3C41",
        "ir-text-gray": "#212225",
        "ir-light-gray": "#73757A",
        "ir-dark-gray": "#252525",
        "ir-black": "#171717"
      },
      fontFamily: {
        "serif-bold": ["BreuerCondensed-Bold"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require('@tailwindcss/typography'),
    // ...
  ],
};
