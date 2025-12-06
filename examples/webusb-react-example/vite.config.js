import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        open: true,
    },
    build: {
        outDir: "build",
        rollupOptions: {
            external: ["usb"],
        },
    },
    resolve: {
        alias: {
            events: path.resolve(__dirname, "node_modules/events"),
        },
    },
});
