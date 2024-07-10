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
        "gray-70": "#F6F7F9",
        "gray-690": "#646A7C",
        "zinc-930": "#121212",
      },
    },
  },
  plugins: [],
};
