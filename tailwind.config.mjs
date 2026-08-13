/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream:        '#F5EFE3',
        'cream-deep': '#ECE3D2',
        paper:        '#FFFCF6',
        bone:         '#E5DCC5',
        sage:         '#7A8C5C',
        'sage-soft':  '#C8D2B5',
        'sage-deep':  '#4F5C39',
        'sage-mist':  '#ECEFE2',
        clay:         '#C2855E',
        'clay-soft':  '#E5BFA2',
        'clay-deep':  '#8B5630',
        ink:          '#1F1A14',
        'ink-soft':   '#4A4138',
        'ink-mute':   '#847868',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
