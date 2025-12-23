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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "accent-cyan": "#1e40af",
        "accent-purple": "#8b5cf6",
        "accent-green": "#10b981",
        "accent-orange": "#f97316",
        "card-bg": "#1a1a2e",
        "card-border": "#16213e",
      },
      animation: {
        "gradient-descent": "gradient-descent 8s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "data-flow": "data-flow 10s linear infinite",
        "node-pulse": "node-pulse 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      boxShadow: {
        "glow-cyan": "0 0 20px rgba(0, 217, 255, 0.5)",
        "glow-purple": "0 0 20px rgba(139, 92, 246, 0.5)",
        "glow-green": "0 0 20px rgba(16, 185, 129, 0.5)",
      },
    },
  },
  plugins: [],
};
export default config;
