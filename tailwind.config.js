import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';

const theme = {
  primary: 'var(--color-primary)',
  white: 'var(--color-white)',
  offWhite: 'var(--color-off-white)',
  green: 'var(--color-green)',
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['IBM Plex Sans'],
      }
    },
    colors: {
      primary: '#282b41',
      whit: '#fff',
      offWhite: '#f7f7f7',
      green: '#64ffaa',
      purpil: '#8c96ff',
      orange: '#ffc164',
      red: '#ff6464',
    }
  },
  plugins: [
    typography,
    forms,
    aspectRatio,
  ],
}