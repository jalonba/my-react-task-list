import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { SOURCE_MAP_COMMENT_KEY } from "source-map-explorer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  buildmap: true,
});
