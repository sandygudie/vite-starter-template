import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // tsconfigPaths({
    //   extensions: ['.ts', '.tsx', '.js', '.jsx', '.svg'],
    // }),
    react({
      babel: {
        presets: [
          ['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }],
        ],
        plugins: [
          'babel-plugin-macros',
          [
            '@emotion/babel-plugin-jsx-pragmatic',
            {
              export: 'jsx',
              import: '__cssprop',
              module: '@emotion/react',
            },
          ],
          ['@babel/plugin-transform-react-jsx', { pragma: '__cssprop' }, 'twin.macro'],
         
        ],
      },
    }),
],
});
