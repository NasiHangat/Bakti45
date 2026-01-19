import type { Config } from "tailwindcss"; 

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Folder studio/sanity biasanya tidak butuh tailwind, jadi tidak perlu dimasukkan
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0F4C81",   // Biru Panti
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