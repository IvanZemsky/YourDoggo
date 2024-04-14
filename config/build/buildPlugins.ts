import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin"
import path from "path";
import fs  from "fs";

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {
   const isDev = options.mode === "development";
   const isProd = options.mode === "production";

   const faviconPath = path.resolve(options.paths.public, 'favicon.ico');
   const faviconExists = fs.existsSync(faviconPath);

   const plugins: Configuration['plugins'] = [
      new HtmlWebpackPlugin({
         template: options.paths.html,
         favicon: faviconExists ? faviconPath : false
      }),
      new MiniCssExtractPlugin({
         filename: "css/[name].[contenthash:8].css",
         chunkFilename: "css/[name].[contenthash:8].css",
      }),
   ]

   if (isDev) {
      plugins.push(
         new ForkTsCheckerWebpackPlugin()
      )
      plugins.push(
         new ReactRefreshWebpackPlugin()
      )
   }

   return plugins;
}