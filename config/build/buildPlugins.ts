import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: options.paths.html }),
    new MiniCssExtractPlugin({ filename: 'css/[name].css' }),
    new webpack.DefinePlugin({ IS_DEV: options.isDev }),
  ];
}