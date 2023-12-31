import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json";
import { terser } from "rollup-plugin-terser";

const plugins = [
  nodeResolve(),
  commonjs(),
  {
    banner() {
      return `/*! ${pkg.name} ${pkg.version} https://github.com/${pkg.repository} @license ${pkg.license} */`;
    }
  }
];

export default [
  {
    input: "index.js",
    output: [
      {
        file: "dist/markdown-it-inline-wrapper.js",
        format: "umd",
        name: "markdownItInlineWrapper"
      },
      {
        file: "dist/markdown-it-inline-wrapper.min.js",
        format: "umd",
        name: "markdownItInlineWrapper",
        plugins: [terser()]
      }
    ],
    plugins: plugins
  }
];
