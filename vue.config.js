module.exports = {
	configureWebpack: {},
	css: { extract: false },
	publicPath: process.env.NODE_ENV === "production" ? "/vue-segmented/" : "/",
  productionSourceMap: false
};
