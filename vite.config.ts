import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      /* proxy do mvc que redireciona as requisições pro backend p nn precisar usar CORS */
      "/InsertGame": {
        target: "https://localhost:7288",
        changeOrigin: true,
        secure: false,
      },
      "/Home": {
        target: "https://localhost:7288",
        changeOrigin: true,
        secure: false,
      }
    }
  }
});
