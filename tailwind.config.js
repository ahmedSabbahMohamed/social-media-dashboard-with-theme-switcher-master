/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        "lime-green": "hsl(163, 72%, 41%)",
        "bright-red": "hsl(356, 69%, 56%)",
        "facebook": "hsl(208, 92%, 53%)",
        "twitter": "hsl(203, 89%, 53%)",
        "instagram": "hsl(37, 97%, 70%)",
        "instagram-2": "hsl(329, 70%, 58%)",
        "youtube": "hsl(348, 97%, 39%)",
        "gradiant-from": "hsl(210, 78%, 56%)",
        "gradiant-to": "hsl(146, 68%, 55%)",
        "light-theme": "hsl(230, 22%, 74%)",
        "vdblue": "hsl(230, 17%, 14%)",
        "vdblue-2": "hsl(232, 19%, 15%)",
        "ddblue": "hsl(228, 28%, 20%)",
        "dblue": "hsl(228, 34%, 66%)",
        "white": "hsl(0, 0%, 100%)",
        "vpblue": "hsl(225, 100%, 98%)",
        "lgblue": "hsl(227, 47%, 96%)",
        "dgblue": "hsl(228, 12%, 44%)",
        "dark-blue-text": "hsl(230, 17%, 14%)",
      },
      fontSize: {
        rem: "14px"
      },
      fontFamily: {
        inter: ['Inter']
      }
    },
  },
  plugins: [],
}

