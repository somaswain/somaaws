import { JupyterFrontEnd, JupyterFrontEndPlugin } from "@jupyterlab/application";
/**
 * Initialize the console widget extension
 */
export declare const initiateExtension: (getPaths: (region: string) => Promise<string[]>) => JupyterFrontEndPlugin<void, JupyterFrontEnd.IShell, "desktop" | "mobile">;
