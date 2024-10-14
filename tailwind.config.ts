import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#f5f5f5', // light mode background
        foreground: '#333333', // light mode text color
        'background-dark': '#121212', // dark mode background
        'foreground-dark': '#e0e0e0', // dark mode text color
      },
    },
  },
  plugins: [],
};
export default config;
