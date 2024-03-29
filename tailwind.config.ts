import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      black: '#000',
      bluePrimary: '#0000ff',
      // blueSecondary: '#4d4dff',
      blueSecondary: '#6666ff',
      pink: '#FE66CB',
      // purple: '#3f3cbb',
      // midnight: '#121063',
      // metal: '#565584',
      // tahiti: '#3ab7bf',
      // silver: '#ecebff',
      // 'bubble-gum': '#ff77e9',
      // bermuda: '#78dcca',
    },
  },
  plugins: [],
};
export default config;
