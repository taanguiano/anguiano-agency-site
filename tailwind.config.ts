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
        background: "#0F0A19",
        white: "#fff",
        glass: "rgba( 0, 0, 0, 0.5 )",
        input: "#14162b",
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
          "radial-gradient(circle, #845ec2, #0078d1, #0086c1, #008d9f, #008f7a)",
        "hero-title-gradient":
          "linear-gradient(180deg,color(display-p3 .9411764706 .9333333333 .9764705882/.8) 0%,color(display-p3 .8862745098 .9098039216 1/1) 100%)",
        "header-radial-gradient":
          "radial-gradient(62.87% 100% at 50% 100%,rgba(255,255,255,.12) 0%,rgba(255,255,255,0) 100%)",
        "emphasized-hero-gradient":
          "linear-gradient(135deg,color(display-p3 .6196078431 .4784313725 1/1) 0%,color(display-p3 .9960784314 .5450980392 .7333333333/1) 33.33%,color(display-p3 1 .7411764706 .4784313725/1) 66.67%,color(display-p3 .9725490196 .9176470588 .7647058824/1) 100%);",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      },
      borderColor: {
        glass: "rgba( 255, 255, 255, 0.18 )",
      },
      backdropBlur: {
        glass: "4px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: true, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
export default config;

// --buff: #cb997eff;
// --desert-sand: #ddbea9ff;
// --champagne-pink: #ffe8d6ff;
// --ash-gray: #b7b7a4ff;
// --sage: #a5a58dff;
// --reseda-green: #6b705cff;

// background: rgba( 0, 0, 0, 0.4 );
// box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
// backdrop-filter: blur( 4px );
// -webkit-backdrop-filter: blur( 4px );
// border-radius: 10px;
// border: 1px solid rgba( 255, 255, 255, 0.18 );
