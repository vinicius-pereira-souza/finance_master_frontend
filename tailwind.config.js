/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-550": "#A236F6",
        "purple-810": "#7A2EB7",
        "red-460": "#EB5757",
        "red-485": "#F54949",
        "green-370": "#5AD178",
        "gray-30": "#FAFAFA",
        "gray-68": "#F2F5FA",
        "gray-70": "#F6F7F9",
        "gray-65": "#F5F5F5",
        "gray-72": "#ECECEC",
        "gray-690": "#646A7C",
        "zinc-930": "#121212",
        "blue-510": "#4036F6",
        "blue-945": "#1C274E",
        "blue-980": "#0D1639",
        modal: "rgba(0, 0, 0, 25%)",
      },
      boxShadow: {
        "bsh-card": "0 4px 4px 0 rgba(0, 0, 0, 25%)",
      },
      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
      },
      fontSize: {
        14: "14px",
        20: "20px",
        25: "25px",
        32: "32px",
      },
      maxWidth: {
        tablet: "720px",
        desktop: "1096px",
      },
      height: {
        268: "268px",
        navbar_mobile: "calc(100vh - 61px)",
      },
    },
  },
  plugins: [],
};
