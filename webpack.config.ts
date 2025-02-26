import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildMode, BuildPaths, BuildPort } from './config/build/types/config';
import path from 'path';

export default (env: BuildEnv) => {
  const mode: BuildMode = env.mode || 'development';
  const port: BuildPort = env.port || 3000;

  const isDev = mode === 'development';

  const paths: BuildPaths = {
    html: path.resolve('public', 'index.html'),
    entry: path.resolve('src', 'index.tsx'),
    output: path.resolve('dist'),
  };

  return buildWebpackConfig({ mode, port, paths, isDev });
};