import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    setupFiles: ["./vitest.setup.ts"],
    environment: "jsdom",
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
});
