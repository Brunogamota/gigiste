import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-canela)", "Georgia", "serif"],
        body: ["var(--font-suisse)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
