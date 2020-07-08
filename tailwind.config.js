const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    theme: {
        extend: {
            fontFamily: {
                sans: ["Muli", ...defaultTheme.fontFamily.sans]
            },
            spacing: {
                "22": "5.5rem",
                "72": "18rem",
                "84": "21rem",
                "96": "24rem"
            }
        },
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
        })
    },
    purge: {
        content: [
            "./app/**/*.php",
            "./resources/**/*.html",
            "./resources/**/*.js",
            "./resources/**/*.jsx",
            "./resources/**/*.ts",
            "./resources/**/*.tsx",
            "./resources/**/*.php",
            "./resources/**/*.vue",
            "./resources/**/*.twig"
        ],
        options: {
            defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || [],
            whitelistPatterns: [/-active$/, /-enter$/, /-leave-to$/, /show$/]
        }
    },
    variants: {
        width: ["responsive", "hover", "group-hover"],
        height: ["responsive", "hover", "group-hover"],
        bgColor: ["responsive", "hover", "group-hover", "focus", "active", "disabled"],
        textColor: ["responsive", "hover", "group-hover", "focus", "active", "disabled"],
        borderColor: ["responsive", "hover", "group-hover", "focus", "active", "disabled"],
        borderStyle: ["hover", "focus"],
        borderWidth: ["hover", "focus"]
    },
    plugins: [require("@tailwindcss/custom-forms"), require("@tailwindcss/ui")]
};
