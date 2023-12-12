import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        "hero-title-gradient":
          "linear-gradient(180deg,color(display-p3 .9411764706 .9333333333 .9764705882/.8) 0%,color(display-p3 .8862745098 .9098039216 1/1) 100%)",
        "header-radial-gradient":
          "radial-gradient(62.87% 100% at 50% 100%,rgba(255,255,255,.12) 0%,rgba(255,255,255,0) 100%)",
        "emphasized-hero-gradient":
          "linear-gradient(135deg,color(display-p3 .6196078431 .4784313725 1/1) 0%,color(display-p3 .9960784314 .5450980392 .7333333333/1) 33.33%,color(display-p3 1 .7411764706 .4784313725/1) 66.67%,color(display-p3 .9725490196 .9176470588 .7647058824/1) 100%);",
      },
      boxShadow: {
        glass: "0 4px 30px rgba(0, 0, 0, 0.1)",
      },
      borderColor: {
        glass: "#f8fafc0f",
      },
    },
  },
  plugins: [],
};
export default config;
