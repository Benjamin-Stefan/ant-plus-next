# Contributing to ant-plus-next

Thank you for considering contributing to this project! We welcome all types of contributions, whether it's reporting bugs, suggesting features, writing code, or improving documentation.

## Table of Contents

-   [Code of Conduct](#code-of-conduct)
-   [Security Policy](#security-policy)
-   [How to Contribute](#how-to-contribute)
    -   [Reporting Bugs](#reporting-bugs)
    -   [Suggesting Features](#suggesting-features)
    -   [Submitting Code Changes](#submitting-code-changes)
-   [Development Workflow](#development-workflow)
    -   [Local Setup](#local-setup)
    -   [Testing](#testing)
-   [Pull Request Guidelines](#pull-request-guidelines)
-   [Getting Help](#getting-help)
-   [License](#license)

## Code of Conduct

Please read and adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md) to ensure a welcoming and friendly environment for all contributors.

## Security Policy

If you discover a security vulnerability, please review our [Security Policy](./SECURITY.md) for instructions on how to responsibly disclose it.

## How to Contribute

### Reporting Bugs

If you find a bug, please open an [issue](https://github.com/Benjamin-Stefan/ant-plus-next/issues) and provide as much detail as possible:

-   Steps to reproduce the bug
-   Expected and actual behavior
-   Environment details (e.g., OS, Node.js version, ANT+ dongle model)

Make sure to search existing issues first to avoid duplicates.

### Suggesting Features

To suggest a new feature or improvement, open an [issue](https://github.com/Benjamin-Stefan/ant-plus-next/issues) and describe:

-   The problem you're facing or the enhancement you'd like to see
-   Any possible solutions or ideas for how to implement it

### Submitting Code Changes

1. **Fork the repository**: Click the "Fork" button at the top right.
2. **Clone your fork**: `git clone https://github.com/benjamin-stefan/ant-plus-next.git`
3. **Create a new branch**: `git checkout -b feature/my-new-feature`
    - Use descriptive branch names like `feature/add-new-sensor` or `fix/bug-123`.
4. **Make your changes**: Add your code or documentation.
5. **Follow the commit guidelines**: Use the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format, e.g., `git commit -m 'feat: add new feature'`.
6. **Push your changes**: `git push origin feature/my-new-feature`
7. **Open a Pull Request**: Go to the original repository and submit a Pull Request (PR) with a detailed description of your changes.

## Development Workflow

### Local Setup

1. Clone the repository: `git clone https://github.com/Benjamin-Stefan/ant-plus-next.git`
2. Install dependencies: `npm install`
3. Install Git hooks: `npm run prepare` (required for Husky pre-commit and pre-push checks)

### Testing

-   Run all tests: `npm test`

Ensure that all tests pass before submitting a PR.

## Pull Request Guidelines

-   **Description**: Provide a clear and concise description of the changes.
-   **Reference Issues**: Link any related issues in the PR description (e.g., "Fixes #123").
-   **Checklist**:
    -   Code adheres to the style guidelines (`npm run lint`).
    -   All tests pass.
    -   Documentation has been updated if necessary.
    -   Changes are backward compatible.

## Getting Help

If you need help or have questions, feel free to:

-   Open an issue using the appropriate [issue template](https://github.com/Benjamin-Stefan/ant-plus-next/issues).

## License

By contributing, you agree that your contributions will be licensed under the same license as the project ([MIT License](./LICENSE)).

## Thank You!

Your contributions make this project better for everyone. Thank you!
