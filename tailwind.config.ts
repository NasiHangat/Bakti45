import type { Config } from "tailwindcss"; 

const config: Config = {
content: [
  "./app/**/*.{js,ts,jsx,tsx,mdx}", 
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
],

  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1e5fba",   // Biru Panti
          yellow: "#F59E0B", // Kuning Ceria
          light: "#F3F4F6",  // Abu background
        }
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      }
    },
  },
  plugins: [],
};
export default config;