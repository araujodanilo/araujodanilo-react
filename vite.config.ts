import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    test: {
      environment: "jsdom",
      // hey! 👋 over here
      globals: true,
      setupFiles: "./tests/setup.ts",
    },
    base: "/",
  };

  if (command !== "serve") {
    config.base = "/araujodanilo-react/";
  }

  return config;
});
