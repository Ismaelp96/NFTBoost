/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      "@tablet": "640px",
      "@laptop": "1024px",
      "@desktop": "1280px",
    },
    extend: {
      maxWidth: {
        grid: "77.5rem",
        "card-nft": "17.4rem",
        "card-collector": "37rem",
        "logo-size-mb": "10rem",
        "nav-header": "48.3rem",
        "left-cont-footer": "20.25rem",
        "content-desc-hero": "41.1rem",
      },
      width: {
        "width-cards-mobile": "43.75rem",
        "width-desk-card": "80rem",
      },
      backgroundImage: {
        "hero-pattern": "url('../assets/bg-hero.svg')",
      },
      height: {
        "area-image-nft": "14.7",
        "height-cards-mobile": "15.3rem",
        "height-cards-desk": "26.6rem",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        "blue-primary": "#1D4FFE",
        "green-primary": "#4BCE97",
        "gray-border-card": "#131317",
        "gray-area-favorite": "#05030a",
        "gray-button-carrousel": "#07050f",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
