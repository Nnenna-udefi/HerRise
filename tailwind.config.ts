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
        hero: "url('/images/hero.jpeg')",
        hero2: "url('/images/6.jpeg')",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        merriweather: ["var(--font-merriweather)"],
        recoleta: ["var(--font-recoleta)"],
        nunito: ["var(--font-nunito)"],
      },
    },
  },
  plugins: [],
};
export default config;
