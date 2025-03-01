import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildAliases, BuildEnv, BuildMode, BuildPaths, BuildPort } from './config/build/types/config';
import path from 'path';

export default (env: BuildEnv) => {
  const mode: BuildMode = env.mode || 'development';
  const port: BuildPort = env.port || 3000;

  const isDev = mode === 'development';

  const aliases: BuildAliases = {
    app: path.resolve('src', 'app', '*'),
    pages: path.resolve('src', 'pages', '*'),
    shared: path.resolve('src', 'shared', '*'),
    widgets: path.resolve('src', 'widgets', '*'),
  }

  const paths: BuildPaths = {
    html: path.resolve('public', 'index.html'),
    entry: path.resolve('src', 'index.tsx'),
    output: path.resolve('dist'),
    src: path.resolve('src'),
  };

  return buildWebpackConfig({ mode, port, paths, aliases, isDev });
};