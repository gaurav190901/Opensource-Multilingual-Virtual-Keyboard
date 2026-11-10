// Build script: bundles src/ (plus simple-keyboard and all CSS) into dist/
import { build } from "esbuild";
import { readFileSync } from "node:fs";

const pkg = JSON.parse(readFileSync(new URL("./package.json", import.meta.url)));

const common = {
  bundle: true,
  target: ["es2018"],
  loader: { ".css": "text" }, // CSS is bundled as a string and injected at runtime
  define: { __VERSION__: JSON.stringify(pkg.version) },
  legalComments: "inline", // keep our and simple-keyboard's licence headers
  logLevel: "info"
};

await Promise.all([
  // <script> tag builds: window.MultilingualKeyboard
  build({ ...common, entryPoints: ["src/global.js"], format: "iife", outfile: "dist/multilingual-keyboard.js" }),
  build({ ...common, entryPoints: ["src/global.js"], format: "iife", minify: true, outfile: "dist/multilingual-keyboard.min.js" }),
  // npm builds: import / require
  build({ ...common, entryPoints: ["src/index.js"], format: "esm", outfile: "dist/multilingual-keyboard.mjs" }),
  build({ ...common, entryPoints: ["src/index.js"], format: "cjs", outfile: "dist/multilingual-keyboard.cjs" })
]);
