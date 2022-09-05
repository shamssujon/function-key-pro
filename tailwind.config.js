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
        extend: {},
    },
    plugins: [],
};
