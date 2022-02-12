const modules = import.meta.env.DEV ? () => import("./code.css") : () => {};
export default modules();
