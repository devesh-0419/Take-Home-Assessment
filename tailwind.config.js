/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      '2xl':{'max':'1500px'},
      'xl':{'max':'1200px'},
      'lg':{'max':'991px'},
      'md':{'max':'767px'},
      'sm':{'max':'550px'},
      'xsm':{'max':'375px'},
    }
  },
  variants:{
    extend:{
      display:['group-focus'],
      opacity:['group-focus'],
      inset:['group-focus']
    }
  },
  plugins: [],
}