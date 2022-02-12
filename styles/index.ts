import * as codeCSS from "./code.css";

export const conditionalExport =
  import.meta.env.DEV  ? codeCSS : undefined;
