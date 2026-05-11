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
        cream: {
          DEFAULT: "var(--cream)",
          deep: "var(--cream-deep)",
        },
        warm: {
          white: "var(--warm-white)",
        },
        ink: {
          DEFAULT: "var(--ink)",
          light: "var(--ink-light)",
          muted: "var(--ink-muted)",
        },
        gold: {
          DEFAULT: "var(--gold)",
          light: "var(--gold-light)",
          pale: "var(--gold-pale)",
        },
        copper: "var(--copper)",
        sage: "var(--sage)",
        border: "var(--border)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-outfit)"],
        display: ["var(--font-cormorant)"],
        mono: ["var(--font-space)"],
      },
      boxShadow: {
        "neu-raised": "var(--neu-raised)",
        "neu-inset": "var(--neu-inset)",
        "neu-float": "var(--neu-float)",
      },
      backgroundImage: {
        "grad-gold": "var(--grad-gold)",
        "grad-warm": "var(--grad-warm)",
        "grad-card": "var(--grad-card)",
        "grad-hero-img": "var(--grad-hero-img)",
        "grad-section": "var(--grad-section)",
        "grad-cta": "var(--grad-cta)",
      },
    },
  },
  plugins: [],
};
export default config;
