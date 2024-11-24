import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'tea': {
        '50': '#f7f6f5',
        '100': '#edebe7',
        '200': '#dad6ce',
        '300': '#c2bcaf',
        '400': '#a99f8e',
        '500': '#978a78',
        '600': '#8a7b6c',
        '700': '#74675a',
        '800': '#5f544d',
        '900': '#4e4540',
        '950': '#292421',
      },  
      'pale': {
        '50': '#f5f3f1',
        '100': '#e5e2dc',
        '200': '#ccc7bc',
        '300': '#afa695',
        '400': '#988b77',
        '500': '#897b69',
        '600': '#756759',
        '700': '#5f5249',
        '800': '#524741',
        '900': '#483e3b',
        '950': '#282120',
      },
      },
    },
  },
  plugins: [],
};
export default config;