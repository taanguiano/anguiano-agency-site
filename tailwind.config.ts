import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: '"SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif',
    },
    colors: {
      background: "#000212",
      white: "#fff",
      "glass-background": "rgba(255, 255, 255, 0.06)",
    },
    fontSize: {
      sm: "1.4rem",
      md: "1.6rem",
      lg: ["2.2rem", "1.3"],
      "5xl": ["8rem", "1"],
    },
    spacing: {
      0: "0",
      1: "0.4rem",
      2: "0.8rem",
      3: "1.2rem",
      4: "1.6rem",
      5: "2rem",
      6: "2.4rem",
      7: "2.8rem",
      8: "3.2rem",
      9: "3.6rem",
      10: "4rem",
      11: "4.4rem",
      12: "4.8rem",
      13: "5.2rem",
      14: "5.6rem",
      15: "6rem",
      16: "6.4rem",
    },
    backgroundImage: {
      "primary-gradient":
        "linear-gradient(to bottom, #000212, #281a30, #572641, #863542, #a85234, #ab5435, #af5536, #b25737, #983c4a, #6e2f52, #3e274a, #141c34)",
    },
    boxShadow: {
      glass: "0 4px 30px rgba(0, 0, 0, 0.1)",
    },
    borderColor: {
      glass: "rgba(255, 255, 255, 0.4)",
    },
  },
  plugins: [],
};
export default config;
