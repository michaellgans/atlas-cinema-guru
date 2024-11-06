/** @type {import('tailwindcss').Config} */
export default {
  content: ["./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'lumi-teal': '#54F4D0',
        'lumi-dark-teal': '#1DD2AF',
        'lumi-navy': '#00003C',
        'lumi-navy2': '#000061'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    }
  },
  plugins: [],
};
