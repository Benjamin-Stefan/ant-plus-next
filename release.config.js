export default {
    branches: ["main"],
    repositoryUrl: "https://github.com/Benjamin-Stefan/ant-plus-next",
    plugins: [
        [
            "@semantic-release/commit-analyzer",
            {
                preset: "conventionalcommits",
                releaseRules: [
                    { type: "feat", release: "minor" },
                    { type: "fix", release: "patch" },
                    { type: "perf", release: "patch" },
                    { type: "docs", scope: "README", release: "patch" },
                    { type: "refactor", release: "patch" },
                    { type: "chore", release: false },
                    { type: "style", release: false },
                    { type: "test", release: false },
                    { type: "build", release: "patch" },
                ],
            },
        ],
        [
            "@semantic-release/release-notes-generator",
            {
                preset: "conventionalcommits",
                presetConfig: {
                    types: [
                        { type: "feat", section: "🚀 Features" },
                        { type: "fix", section: "🐛 Bug Fixes" },
                        { type: "perf", section: "⚡ Performance Improvements" },
                        { type: "revert", section: "⏪ Reverts" },
                        { type: "docs", section: "📚 Documentation", hidden: false },
                        { type: "style", section: "🎨 Styles", hidden: true },
                        { type: "refactor", section: "♻️ Code Refactoring" },
                        { type: "test", section: "✅ Tests", hidden: true },
                        { type: "build", section: "📦 Build System" },
                        { type: "ci", section: "👷 Continuous Integration", hidden: true },
                    ],
                },
                writerOpts: {
                    headerPartial: `
# 🚀 ant-plus-next - Changelog

Welcome to the **Changelog** of **ant-plus-next**.  
Here you will find all the significant changes, new features, and bug fixes for each version.

---

### Current Version: {{version}}  
Released on: {{date}}  

### Links

- 📂 [Repository]({{repository}})  
- 📄 [Documentation](https://github.com/Benjamin-Stefan/ant-plus-next?tab=readme-ov-file#api-documentation)  
- 📝 [Issue Tracker](https://github.com/Benjamin-Stefan/ant-plus-next/issues

---

  `,
                },
            },
        ],
        [
            "@semantic-release/changelog",
            {
                changelogFile: "CHANGELOG.md",
            },
        ],
        "@semantic-release/npm",
        "@semantic-release/github",
        [
            "@semantic-release/git",
            {
                assets: ["CHANGELOG.md", "package.json", "package-lock.json"],
                message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
            },
        ],
    ],
};
