// tailwind.config.js
module.exports = {
    theme: {
        backgroundColor: theme => ({
            ...theme("colors"),
            accent: "#5B4DBE",
            "orange-900": "#FD4C3A",
            "salmon-900": "#FF695D",
            "salmon-100": "#FFF4F2",
            "pink-100": "#FFEEF8",
            "purple-100": "#EFEEFE",
            body: "#FFFAF6"
        }),
        borderColor: theme => ({
            ...theme("colors"),
            "gray-100": "#EAE5E1"
        }),
        textColor: theme => ({
            ...theme("colors"),
            "gray-300": "#b6b6b6",
            accent: "#5B4DBE",
            white: "#ffffff"
        }),
        placeholderColor: theme => ({
            ...theme("colors"),
            "gray-300": "#b6b6b6",
            accent: "#5B4DBE"
        }),
        fontFamily: {
            display: ["Inter", "sans-serif"],
            body: ["Inter", "sans-serif"]
        }
    },

    variants: ["responsive", "hover", "focus", "active"],
    plugins: []
};
