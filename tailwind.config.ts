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
        bg: "#FDFCF7",
        cream: "#F9F5EB",
        blue: "#1CB0F6",
        bluedark: "#0EA5E9",
        yellow: "#FEC800",
        ink: "#333333",
        ink2: "#666666",
        ink3: "#999999",
      },
      fontFamily: {
        sans: ["Rubik", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
