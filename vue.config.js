const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/mathelin-eirb/" : "/",
  outputDir: "dist",
  assetsDir: "static",
  productionSourceMap: false,
});
