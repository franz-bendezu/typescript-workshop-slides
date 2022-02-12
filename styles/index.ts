import * as codeCSS from "./code.css";

export const conditionalExport =
  process.env.NODE_ENV === "production" ? undefined : codeCSS;
