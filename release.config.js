export default {
    branches: ["main"],
    repositoryUrl: "https://github.com/Benjamin-Stefan/ant-plus-next",
    plugins: [
        ["@semantic-release/changelog", { changelogFile: "CHANGELOG.md" }],
        "@semantic-release/npm",
        [
            "@semantic-release/git",
            {
                assets: ["package.json", "CHANGELOG.md"],
                message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
            },
        ],
        "@semantic-release/github",
    ],
};
