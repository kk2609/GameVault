// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   plugins: [react(), tailwindcss()],
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    proxy: {
      "/rawg": {
        target: "https://api.rawg.io/api", // ✅ added /api here
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/rawg/, ""),
      },
    },
  },
});