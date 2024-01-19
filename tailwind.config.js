/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',     // صفحات Next.js
    './src/components/**/*.{js,ts,jsx,tsx}', // مكوناتك
    './src/app/**/*.{js,ts,jsx,tsx}',        // إذا كنت تستخدم App Router
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
