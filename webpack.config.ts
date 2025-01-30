import webpack from "webpack";
import path from "path";
import { buildWebpack } from "./config/build/buildWebpack";
import { BuildMode, BuildPaths } from "./config/build/types/types";

interface EnvVariables {
   mode: BuildMode;
   port: number;
}

export default (env: EnvVariables) => {
   const paths: BuildPaths = {
      entry: path.resolve(__dirname, "src", "app", "index.tsx"),
      output: path.resolve(__dirname, "build"),
      html: path.resolve(__dirname, "public", "index.html"),
      public: path.resolve(__dirname, "public"),
      src: path.resolve(__dirname, "src"),
   }

   const config: webpack.Configuration = buildWebpack({
      port: env.port && 3000,
      mode: env.mode ?? 'development',
      paths
   });
   return config;
};