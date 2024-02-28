import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import PeerDepsExternalPlugin from 'rollup-plugin-peer-deps-external';
import css from "rollup-plugin-import-css";
import postcss from 'rollup-plugin-postcss';

// const packageJson = require("./package.json");
import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        plugins: [css()]
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: false,
      },
    ],
    plugins: [
      PeerDepsExternalPlugin(), 
      resolve({
        extensions: ['.css']
      }),
      commonjs(),
      postcss({
        extract: true,
        minimize: true,
        extensions: ['.css'],
        inject: true,
      }),
      typescript(
        { 
          tsconfig: "./tsconfig.json",
          exclude: [
            "tests/**",
            "src/stories/**"
          ]
        }
      ),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];