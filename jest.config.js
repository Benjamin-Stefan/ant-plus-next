/** @type {import('jest').Config} */
export default {
    testEnvironment: "node",
    roots: ["<rootDir>/tests/unit"],
    transform: {
        "^.+\\.ts$": ["ts-jest", { tsconfig: "tests/unit/tsconfig.json" }],
    },
    // Sources import siblings with an explicit ".js" extension (ESM style); map them back to the .ts files.
    moduleNameMapper: {
        "^(\\.{1,2}/.*)\\.js$": "$1",
    },
};
