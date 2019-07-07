export default {
  title: 'smHRt Documentation',
  dest: '/build/docs',
  base: '/docs/',
  codeSandbox: false,
  typescript: true,
  modifyBundlerConfig: bundlerConfig => {
    const rules = [
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      }
    ];
    bundlerConfig.module.rules.push(...rules);
    return bundlerConfig;
  }
}