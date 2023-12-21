import { defineConfig } from 'vite';

export default defineConfig({
  // Indica la ruta relativa al directorio raíz de tu proyecto
  base: './index.html',

  // Configuración específica de Three.js y GLTFLoader
  optimizeDeps: {
    include: ['three', 'three/examples/jsm/loaders/GLTFLoader.js'],
  },
});