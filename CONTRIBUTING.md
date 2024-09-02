# Contributing to ant-plus-next

We love contributions! Thank you for considering contributing to this project.

## Code of Conduct

Please note that this project is governed by a [Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project, you agree to abide by its terms.

## How to Contribute

1. **Fork the repository**: Click on the "Fork" button at the top right of this page.
2. **Clone your fork**: `git clone https://github.com/your-username/ant-plus-next.git`
3. **Create a new branch**: `git checkout -b feature/new-feature`
    - Use descriptive branch names, such as `feature/add-new-sensor` or `fix/bug-123`.
4. **Make your changes**: Add your new feature or fix a bug.
5. **Commit your changes**: Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format, e.g., `git commit -m 'feat: add new feature'`.
6. **Push to your branch**: `git push origin feature/new-feature`
7. **Submit a Pull Request (PR)**: Go to the original repository and open a Pull Request. Please provide a detailed description of your changes.

## Automated Checks

### Git Hooks

This project uses Git hooks via [Husky](https://typicode.github.io/husky/#/) to run checks automatically:

-   **Pre-commit Hook**: Runs `eslint` and `prettier` to check for code quality and formatting issues before each commit. Please ensure these checks pass before committing.
-   **Pre-push Hook**: Runs the test suite to verify that all tests pass before pushing code to the remote repository.

To install these hooks locally, run:

```bash
npm run prepare
```

## Continuous Integration (CI)

This repository uses [GitHub Actions](https://docs.github.com/en/actions) for continuous integration:

-   **CI Workflow**: Automatically runs tests, lints the code, and builds the project for each pull request. Make sure your changes pass these checks before requesting a review.
-   **Release Workflow**: Automatically publishes a new version to npm when a new version is tagged in the main branch.

## Coding Style

-   Please adhere to the coding style and conventions outlined in the `.eslintrc` and `.prettierrc` files.
-   Run `npm run lint` before committing to ensure your code follows the style guide.

## Testing

-   Ensure all tests pass before submitting a PR by running `npm test`.
-   If you add new functionality, please add corresponding tests.

## Pull Request Process

-   Ensure your PR includes a comprehensive description of the changes.
-   Reference any related issues in the PR description.
-   Each PR must be approved by at least one maintainer.
-   PRs are reviewed on a regular basis. Expect a response within a few days.
-   After review, please make any requested changes before the PR can be merged.

## Getting Help

If you need help or have questions, feel free to:

-   Open a discussion in the [Discussions tab](https://github.com/Benjamin-Stefan/ant-plus-next/discussions).
-   Create an issue using the [issue template](https://github.com/Benjamin-Stefan/ant-plus-next/issues).

## License

By contributing, you agree that your contributions will be licensed under the same license as the project ([MIT License](./LICENSE)).
