export default async () => {
  const { defineConfig } = await import("vitest/config");
  const { default: react } = await import("@vitejs/plugin-react");
  const { default: tsconfigPaths } = await import("vite-tsconfig-paths");

  return defineConfig({
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
};
