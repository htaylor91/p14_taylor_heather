/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    //if using pages directory
    //'./pages/**/*.{js,ts,jsx,tsx,mdx}',
    // Or if using `src` directory:
    //'./src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Using modern `hsl` syntax
      colors: {
        brand: {
          dark: "hsl(var(--color-brand-dark) / <alpha-value>)",
          medium: "hsl(var(--color-brand-medium) / <alpha-value>)",
          light: "hsl(var(--color-brand-light) / <alpha-value>)",
        },
        white: "hsl(var(--color-white) / <alpha-value>)",
        black: "hsl(var(--color-black) / <alpha-value>)",
        bkg: "hsl(var(--color-bkg) / <alpha-value>)",
        content: "hsl(var(--color-content) / <alpha-value>)",
      },
      fontFamily: {
        'Copperplate': ['var(--font-copperplate)'],
        'Roboto': ['var(--font-roboto)'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
};