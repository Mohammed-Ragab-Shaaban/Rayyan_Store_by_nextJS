/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
   
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      transitionProperty: {
        'display': 'display',
        'spacing': 'margin, padding',
      },

      flexGrow: {
        2: '2'
      }
      
    },
    
    container:{
      maxWidth:{
        DEFAULT: '100%',
        sm: 'calc(100% - 5%)',
        lg: 'calc(100% - 5%)',
        xl: 'calc(100% - 5%)',
        '2xl': 'calc(100% - 5%)',
      },
      center:true,
    }
    
    
  },
  plugins: [],
};
