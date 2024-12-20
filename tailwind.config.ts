import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        horizon: ["Dash-Horizon", "sans-serif"]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "honeydew": "#EFF8E2",
        "timberwolf": "#CECFC7",
        "rosequartz": "#ADA8B6",
        "russianviolet": "#23022E",
        "tekhelet": "#573280", 
        "blackv": "#18181C",
        "greyv": "#303030"
      },
      gradientColorStops:{
        "test": "from-indigo-900"
      }
    },
  },
  plugins: [],
};
export default config;
