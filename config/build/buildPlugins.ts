import webpack, {WebpackPluginInstance} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildPaths} from "./types/config";

export function buildPlugins({html}: BuildPaths): WebpackPluginInstance[] {
  return [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({template: html}),
  ]
}