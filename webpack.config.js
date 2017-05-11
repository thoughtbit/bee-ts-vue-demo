// 扩展的webpack配置项不推荐使用此方式, 此次使用只是为了方便eslint验证
module.exports = function (webpackConfig, env) {
  if (env === 'development') {
    webpackConfig.module.rules.push({
      enforce: 'pre',
      test: /\.(ts|tsx)$/,
      loader: 'tslint-loader',
      exclude: /node_modules/
    });
  }
  return webpackConfig;
};
