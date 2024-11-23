import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    setupFiles: ["./vitest.setup.ts"],
    environment: "jsdom",
    include: ["./src/components/**/*.test.{ts,tsx}"],
    coverage: {
      include: ["./src/components/**/*.test.{ts,tsx}"],
      reporter: ["text", "json", "html"],
    },
  },
});
