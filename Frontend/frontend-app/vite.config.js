import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // Use JSDOM for browser-like environment
    globals: true, // Make Vitest globals available without explicit imports
    setupFiles: "./vitest.setup.ts", // Path to your test setup file
  },
});
