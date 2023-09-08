/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'cs_pink':'#ff5f67',
        'cs_org': '#F2A041',
        'cs_blue':'#5de0e6',
        'cs_dark_blue':'#004aad',
        'cs_peach_400':'#FF9494',
        'cs_peach_300':'#FFD1D1',
        'cs_peach_200':'#FFE3E1',
        'cs_peach_100':'#FFF5E4'
      },
    },
  },
  plugins: [],
}
