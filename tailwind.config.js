module.exports = {
    mode: "jit", // faster builds, experimental
    purge: {
        enabled: true,
        content: ["./public/index.html", "./src/**/*.svelte"],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            "sans"  : [ "IBM Plex Sans", "sans-serif" ],
            "serif" : [ "IBM Plex Serif", "serif" ],
            "mono"  : [ "IBM Plex Mono", "monospace" ]
        },
        extend: {
            colors: {}
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
