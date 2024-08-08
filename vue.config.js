const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/recipe-page-main/" : "/",
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
  },
})

function addStyleResource (rule) {
    rule.use('style-resource')
      .loader('style-resources-loader')
      .options({
        patterns: [
          path.resolve(__dirname, './src/styles/base.scss'),
          path.resolve(__dirname, './src/styles/variables.scss'),
          path.resolve(__dirname, './src/styles/typo.scss'),
          path.resolve(__dirname, './src/styles/text-presets.scss'),
        ],
      })
  }
