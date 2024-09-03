export default {
    branches: ["main"],
    repositoryUrl: "https://github.com/Benjamin-Stefan/ant-plus-next",
    plugins: [
        ["@semantic-release/changelog", { changelogFile: "CHANGELOG.md" }],
        "@semantic-release/npm",
        [
            "@semantic-release/git",
            {
                assets: ["package.json", "CHANGELOG.md", "README.md"],
                message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
            },
        ],
        [
            "@semantic-release/github",
            {
                assets: [
                    { path: "dist/ant-plus-next.cjs", label: "CommonJS Build" },
                    { path: "dist/ant-plus-next.cjs.map", label: "CommonJS Source Map" },
                    { path: "dist/ant-plus-next.mjs", label: "ES Module Build" },
                    { path: "dist/ant-plus-next.mjs.map", label: "ES Module Source Map" },
                    { path: "README.md", label: "Documentation" },
                    { path: "package.json", label: "Package Manifest" },
                    { path: "LICENSE", label: "License" },
                ],
            },
        ],
    ],
};
