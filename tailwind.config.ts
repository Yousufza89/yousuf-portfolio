import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand accents are Tailwind's indigo-500 (#6366F1) and emerald-500 (#10B981).
        ink: "#0B0F19",
      },
      fontFamily: {
        sans: ['"DM Sans Variable"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Sora Variable"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "none" },
        },
        pop: {
          from: { opacity: "0", transform: "translateY(8px) scale(0.98)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        rise: "rise 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) both",
        pop: "pop 0.25s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
