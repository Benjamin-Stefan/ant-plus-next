// craco.config.js
const path = require("path");

module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            // Fallbacks für nicht im Browser unterstützte Node.js-Module
            webpackConfig.resolve.fallback = {
                os: require.resolve("os-browserify/browser"),
                path: require.resolve("path-browserify"),
                fs: false, // 'fs' kann im Browser nicht verwendet werden
                net: false, // 'net' kann im Browser nicht verwendet werden
                child_process: false, // 'child_process' kann im Browser nicht verwendet werden
                crypto: require.resolve("crypto-browserify"), // Beispiel für die Verwendung einer browserfähigen Version
                stream: require.resolve("stream-browserify"),
                http: require.resolve("stream-http"),
                https: require.resolve("https-browserify"),
                util: require.resolve("util/"),
                assert: require.resolve("assert/"),
                // Füge weitere Module hinzu, die nicht unterstützt werden
            };

            // Füge eine Regel hinzu, um Source Map-Warnungen für die USB-Bibliothek zu ignorieren
            webpackConfig.module.rules.push({
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"],
                exclude: /node_modules\/usb/, // Ignoriere nur die USB-Bibliothek
            });

            // Füge die Konfiguration hinzu, um spezifische Warnungen zu ignorieren
            webpackConfig.ignoreWarnings = (webpackConfig.ignoreWarnings || []).concat([
                /Failed to parse source map/, // Ignoriere spezifische Source Map-Warnungen
            ]);

            return webpackConfig;
        },
    },
};
