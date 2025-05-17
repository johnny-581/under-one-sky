import type { Config } from "tailwindcss";

export default {
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
        beige: "var(--beige)",
        yellow: "var(--yellow)",
        red: "var(--red)",
        gray: "var(--gray)"
      },
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        merriweather: ['var(--font-merriweather)'],
      }
    },
  },
  plugins: [],
} satisfies Config;
