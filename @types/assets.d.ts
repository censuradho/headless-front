import React from "react";

declare module "*.svg" {
  const component: React.FC<React.SVGProps<SVGSVGElement>>;

  export default component;
}
