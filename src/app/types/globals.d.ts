declare module "*.module.css";
declare module "*.module.scss";

declare module "*.svg" {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
declare module "*.module.jpg";
declare module "*.module.jpeg";
declare module "*.module.png";

declare const __IS_DEV__: boolean