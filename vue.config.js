const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "/portfolio",
  outputDir: "docs",
  transpileDependencies: ["vuetify"],
  lintOnSave: false,
});
