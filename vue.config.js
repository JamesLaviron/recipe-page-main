const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/recipe-page-main/" : "/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/styles/_variables.scss";
          @import "@/assets/styles/text-presets.scss";
        `
      }
    }
  }
})
