const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "/portfolio",
  outputDir: "docs",
  transpileDependencies: ["vuetify"],
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        // target: "http://localhost:11201",
        target: "http://mogakco.parkh.xyz:11201/",
      },
    },
  },
});
