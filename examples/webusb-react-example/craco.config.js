const path = require("path");

module.exports = {
    webpack: {
        alias: {
            fs: false,
            path: require.resolve("path-browserify"),
            os: require.resolve("os-browserify/browser"),
            util: require.resolve("util"),
        },
    },
};
