import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";

const plugins = [
    resolve({
        preferBuiltins: true,
        extensions: [".js", ".ts"],
    }),
    commonjs(),
    typescript({
        tsconfig: "./tsconfig.json",
    }),
    json(),
    terser(),
];

export default [
    {
        input: "src/index.ts",
        output: [
            { file: "dist/ant-plus-next.mjs", format: "esm", sourcemap: true },
            { file: "dist/ant-plus-next.cjs", format: "cjs", sourcemap: true },
        ],
        plugins,
        external: ["usb"],
    },
];
