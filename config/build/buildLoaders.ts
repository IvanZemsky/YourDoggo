import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions, RuleSetRule } from "webpack";
import { BuildOptions } from "./types/types";
import ReactRefreshTypeScript from "react-refresh-typescript";
import path from "path";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
   const isDev = options.mode === "development";
   const isProd = options.mode === "production";

   const assetLoader = {
      test: /\.(png|jpg|jpeg|gif|svg)$/i,
      type: "asset/resource",
   };

   const cssLoaderWithModules = {
      loader: "css-loader",
      options: {
         modules: {
            localIdentName: isDev
               ? "[name]_[local]__[hash:base64:8]"
               : "[hash:base64:8]",
         },
      },
   };

   const scssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
         isDev ? "style-loader" : MiniCssExtractPlugin.loader,
         cssLoaderWithModules,
         "sass-loader",
      ],
   };

   const fontsLoader = {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: "asset/resource",
      generator: {
         filename: "fonts/[name].[ext]",
      },
   };

   const tsLoader = {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: {
         loader: "ts-loader",
         options: {
            transpileOnly: true,
            getCustomTransformers: () => ({
               before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
            }),
         },
      },
   };

   const loaders: RuleSetRule[] = [assetLoader, scssLoader, fontsLoader, tsLoader]

   return loaders;
}
