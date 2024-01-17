/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',     // صفحات Next.js
    './components/**/*.{js,ts,jsx,tsx}', // مكوناتك
    './app/**/*.{js,ts,jsx,tsx}',        // إذا كنت تستخدم App Router
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
