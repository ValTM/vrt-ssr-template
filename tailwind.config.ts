import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './renderer/**/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
};

export default config;
