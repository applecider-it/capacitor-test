/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{ts,vue}',
    './index.html',
  ],
  safelist: [
    {
      pattern: /bg-(red|blue)-200/,
    }
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

