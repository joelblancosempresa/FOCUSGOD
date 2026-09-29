import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FBF6EF",
        bg2: "#FDF9F3",
        red: "#F0492E",
        redd: "#D63A22",
        ink: "#20242E",
        ink2: "#4A4E58",
        ink3: "#8A8E98",
        green: "#2FA45A",
        amber: "#E8890C",
        card: "#FFFFFF",
        pill: "#FBE4DE",
      },
      fontFamily: {
        serif: ["DM Serif Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
