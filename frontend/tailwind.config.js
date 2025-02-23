/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    import("tailwind-scrollbar-hide")
      .then((m) => m.default)
      .catch(() => {}),
  ],
}
