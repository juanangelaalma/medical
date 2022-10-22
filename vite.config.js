const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
        contact: path.resolve(__dirname, 'src/pages/contact.html'),
        about: path.resolve(__dirname, 'src/pages/about.html'),
      }
    },
    outDir: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8080,
    hot: true
  }
}