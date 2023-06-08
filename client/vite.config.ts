import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const development = process.env.NODE_ENV === "development";
console.log("development?: ", development);
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/api": {
                target: development
                    ? "http://localhost:8000"
                    : "https://api.staging.vibeeng.com",
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
