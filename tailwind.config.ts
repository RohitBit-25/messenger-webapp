/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        volo: {
          bg: '#0f172a', // Slate 900
          surface: '#1e293b', // Slate 800
          primary: '#06b6d4', // Cyan 500
          secondary: '#8b5cf6', // Violet 500
          accent: '#f472b6', // Pink 400
          text: '#f8fafc', // Slate 50
          muted: '#94a3b8', // Slate 400
        }
      },
      backgroundImage: {
        'volo-gradient': 'linear-gradient(to right bottom, #06b6d4, #8b5cf6)',
        'volo-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class'
    })
  ],
}