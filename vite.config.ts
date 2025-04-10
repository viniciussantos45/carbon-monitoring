import react from "@vitejs/plugin-react";
import laravel from "laravel-vite-plugin";
import { defineConfig } from "vite";

import path from "node:path";

export default defineConfig({
    ...(process.env.APP_ENV === "production" && {
        base: "https://carbon-monitoring.onrender.com/",
    }),
    server: {
        hmr: process.env.APP_ENV === "local",
    },

    build: {
        manifest: true,
        outDir: "public/build",
        rollupOptions: {
            input: ["resources/css/app.css", "resources/js/app.tsx"],
        },
    },
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.tsx"],
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "resources/js"),
        },
    },
});
