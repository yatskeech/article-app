import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { Configuration } from 'webpack';
import { BuildOptions } from './types/config';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): Configuration {
  return {
    mode: options.mode,
    devtool: options.isDev ? 'inline-source-map' : undefined,
    devServer: options.isDev ? buildDevServer(options) : undefined,
    entry: options.paths.entry,
    output: {
      filename: 'bundle.js',
      path: options.paths.output,
      publicPath: '/',
      clean: true,
    },
    plugins: buildPlugins(options),
    module: { rules: buildLoaders(options) },
    resolve: buildResolvers(options),
  };
}
