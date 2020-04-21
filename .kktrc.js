import path from 'path';

export const loaderOneOf = [
  require.resolve('@kkt/loader-less'),
  require.resolve('@kkt/loader-raw')
];

export const moduleScopePluginOpts = [
  path.resolve(process.cwd(), 'README.md')
];

export default (conf, opts, webpack) => {
  conf.output.path = path.resolve(process.cwd(), 'doc');
  const pkg = require(path.resolve(process.cwd(), 'package.json'));

  // Get the project version.
  conf.plugins.push(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    })
  );

  return conf;
}

