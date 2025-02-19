import type { Config } from "tailwindcss";
//import daisyui library/plugin
import daisyui from "daisyui";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // colors: {

      // },
    },
  },
  plugins: [
    //add daisyui plugin
    daisyui,
  ],
} satisfies Config;
