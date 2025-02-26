export type BuildMode = 'development' | 'production';
export type BuildPort = number;

export interface BuildPaths {
  html: string;
  entry: string;
  output: string;
}

export interface BuildEnv {
  port: BuildPort;
  mode: BuildMode;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  port: BuildPort;
  isDev: boolean;
}