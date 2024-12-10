import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          "0": "#8300ff",
          "400": "#b86dff",
          "500": "#a649ff",
          "600": "#9524ff",
          "800": "#5c00b3",
          "1000": "#340066",
        },
        secondary: {
          "0": "#75687e",
          "100": "#ebe9ed",
          "500": "#9c92a4",
          "700": "#75687e",
          "900": " #363c41",
        },
        base: {
          White: "#fdf7ff",
          Black: "#0A0A0B",
        },
      },
      backgroundImage: {
        hero: "url('/Vector 1.svg')",
        stateBg: "url('/IMG_2647 1.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
