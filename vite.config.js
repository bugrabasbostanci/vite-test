import { defineConfig } from "vite";

export default defineConfig({
  // IF WE DIDN'T DEFINE globals: true
  // import {test, expect} from vitest
  test: {
    globals: true,
  },
});
