/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors : {
        blackColor : "#324460",
        secondBlackColor : "#678CC6",
        main : "#253F23",
        second : "#4E8646",
        transparent : "#61A55C4A",
        white : "#ffffff",
        cardGrey : "#B2B0B01D",
        shadow : "#32446085",
        whiteShadow : "#32446023",
        fieldColor : "#4D864614",
        fieldText : "#B0BDD2",
        blurGreen : "#00D29784",
        blurBlue : "#0085D271"

      },
      boxShadow: {
        'inner-custom': 'inset 0 0 10px rgba(0, 0, 0, 1)',  
      },
      blur: {
        '4xl': '40px',
        '5xl': '50px',  
      },
      fontFamily : {
        sora : ["Sora", "sans-serif"],
        tajawal : ["Cairo", "sans-serif"],
        poppins : ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
};
