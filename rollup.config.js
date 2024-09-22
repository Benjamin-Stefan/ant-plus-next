import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";

const plugins = [
    resolve({
        browser: true,
        preferBuiltins: false,
        extensions: [".js", ".ts"],
    }),
    commonjs(),
    typescript({
        tsconfig: "./tsconfig.json",
    }),
    json(),
    terser(),
];

const externalModules = ["events", "util", "os", "path", "fs", "url", "usb"];

export default [
    {
        input: "src/index.ts",
        output: [{ file: "dist/index.mjs", format: "esm", sourcemap: true, inlineDynamicImports: true }],
        plugins,
        external: externalModules,
    },
    {
        input: "src/index.ts",
        output: [{ file: "dist/index.cjs", format: "cjs", sourcemap: true }],
        plugins,
        external: externalModules,
    },
];
