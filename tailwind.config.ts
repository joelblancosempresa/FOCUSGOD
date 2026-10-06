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
        bg: "#f5f5f5",
        cream: "#fbf6ef",
        blue: "#f0492e",
        bluedark: "#d03a1f",
        yellow: "#f0b020",
        ink: "#20242e",
        ink2: "#4a4e58",
        ink3: "#8a8e98",
        green: "#2fa45a",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0px 1px 6px 0px rgba(32,36,46,0.06)",
        "card-3d": "0px 5px 0px 0px #c9bfae",
      },
    },
  },
  plugins: [],
};
export default config;
