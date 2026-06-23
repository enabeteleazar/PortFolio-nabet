import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode }) => ({
  plugins: [
    mdx(),
    react(),
    ...(mode === 'analyze'
      ? [
          visualizer({
            open: false,
            filename: 'bundle-analysis.html',
            gzipSize: true,
            brotliSize: true,
          }),
        ]
      : []),
  ],
}));
