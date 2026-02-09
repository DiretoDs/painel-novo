base: "/painel-novo/",
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/painel-novo/", // NOME EXATO do repositório
});
