import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import webfontDownload from 'vite-plugin-webfont-dl'
import { partytownVite } from '@builder.io/partytown/utils'

// Custom plugin to inline CSS
const inlineCssPlugin = () => {
  return {
    name: 'inline-css',
    apply: 'build',
    enforce: 'post',
    generateBundle(opts, bundle) {
      const htmlFile = bundle['index.html'];
      if (!htmlFile) return;

      let html = htmlFile.source;
      const cssFiles = Object.keys(bundle).filter(key => key.endsWith('.css'));

      cssFiles.forEach(cssFile => {
        const cssAsset = bundle[cssFile];
        const cssContent = cssAsset.source;
        // Naive replacement: find link with href ending in the filename
        // Vite generates hrefs like /assets/index-D43V_eAl.css or assets/index...
        // We match strictly on the filename to be safe, assuming flattened assets or standard vite output.
        // Regex handles optional leading slash and path.
        const re = new RegExp(`<link[^>]*href="[/.]*assets/${cssFile.split('/').pop()}"[^>]*>`, 'g');
        if (re.test(html)) {
          html = html.replace(re, `<style>${cssContent}</style>`);
          // Remove the css file from bundle so it's not emitted
          delete bundle[cssFile];
        }
      });
      htmlFile.source = html;
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    webfontDownload([
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
    ]),
    partytownVite({
      dest: __dirname + '/dist/~partytown'
    }),
    inlineCssPlugin(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
          icons: ['lucide-react']
        }
      }
    }
  }
})
