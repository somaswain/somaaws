export declare const getPaths: (region: string) => Promise<string[]>;
export declare const getPrefix: (region: string) => Promise<string>;
declare const extension: import("@jupyterlab/application").JupyterFrontEndPlugin<void, import("@jupyterlab/application").JupyterFrontEnd.IShell, "desktop" | "mobile">;
export default extension;
