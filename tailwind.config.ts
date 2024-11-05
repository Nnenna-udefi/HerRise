import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pnk: "#DE3163",
      },
      backgroundImage: {
        hero: "url('/images/girl-child-2024/10.jpeg')",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        merriweather: ["var(--font-merriweather)"],
      },
    },
  },
  plugins: [],
};
export default config;
