import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    alias: {
      '@public/*': options.aliases.public,
      '@app/*': options.aliases.app,
      '@pages/*': options.aliases.pages,
      '@shared/*': options.aliases.shared,
      '@widgets/*': options.aliases.widgets,
    },
  };
}