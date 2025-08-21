/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff1f5",
          100: "#ffe4ec",
          200: "#fecdd6",
          300: "#f9a8c9",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843"
        },
        surface: "#ffffff",
        ink: "#1f2937",
        subtle: "#6b7280"
      },
      borderRadius: {
        xl: "1rem",
        "2xl":"1.25rem"
      },
      boxShadow: {
        soft: "0 4px 24px rgba(0,0,0,.08)"
      }
    },
  },
  plugins: [],
}
