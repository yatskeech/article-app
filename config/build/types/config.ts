export type BuildMode = 'development' | 'production';
export type BuildPort = number;

export interface BuildAliases {
  public: string;
  app: string;
  pages: string;
  shared: string;
  widgets: string;
}

export interface BuildPaths {
  html: string;
  entry: string;
  output: string;
  src: string;
}

export interface BuildEnv {
  port: BuildPort;
  mode: BuildMode;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  aliases: BuildAliases;
  port: BuildPort;
  isDev: boolean;
}