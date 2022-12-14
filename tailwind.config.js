const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        screens: {
            sm: "576px",
            md: "768px",
            lg: "1024px",
            xl: "1160px",
        },
        container: {
            center: true,
            padding: "1.25rem",
        },
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#2E84FF",
                    dark: "#262B62",
                },
            },
            fontFamily: {
                sans: ["Kanit", ...defaultTheme.fontFamily.sans],
            },
            animation: {
                scale: "scale 1s linear infinite",
            },
            keyframes: {
                scale: {
                    "0%, 100%": { transform: "scale(1)" },
                    "50%": { transform: "scale(1.1)" },
                },
            },
        },
    },
    plugins: [],
};
