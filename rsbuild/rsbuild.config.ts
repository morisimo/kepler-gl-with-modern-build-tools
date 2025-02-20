import { defineConfig } from "@rsbuild/core";
import { pluginNodePolyfill } from "@rsbuild/plugin-node-polyfill";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginStyledComponents } from "@rsbuild/plugin-styled-components";

export default defineConfig({
  plugins: [pluginReact(), pluginNodePolyfill(), pluginStyledComponents()],
  server: {
    open: true,
  },
});
