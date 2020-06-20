// tailwind.config.js
module.exports = {
    theme: {
        backgroundColor: theme => ({
            ...theme("colors"),
            accent: "#EB5471",
            black: "#0C0916"
        }),
        borderColor: theme => ({
            ...theme("colors"),
            accent: "#EB5471",
            black: "#0C0916",
            "gray-300": "#A0AAB4"
        }),
        textColor: theme => ({
            ...theme("colors"),
            accent: "#EB5471",
            black: "#0C0916",
            white: "#ffffff",
            "gray-300": "#A0AAB4"
        }),
        placeholderColor: theme => ({
            ...theme("colors"),
            accent: "#EB5471",
            black: "#0C0916",
            white: "#ffffff",
            "gray-300": "#A0AAB4"
        }),
        fontFamily: {
            display: ["Inter", "sans-serif"],
            body: ["Inter", "sans-serif"]
        },
        extend: {
            spacing: {
                "72": "18rem",
                "84": "21rem",
                "96": "24rem"
            }
        }
    },

    variants: ["responsive", "hover", "focus", "active"]
};
