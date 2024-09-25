/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        keepcalm: 'var(--font-keep-calm)',
        worksans: 'var(--font-work-sans)'
      },
      letterSpacing: {
        "10px": "10px",
      },
    },
  },
  plugins: [],
};
