import { Common } from "./menu.common";
import { View } from "tns-core-modules/ui/page/page";

export declare interface MenuOptions {
  title?: string; // IOS Only
  message?: string; // IOS Only
  view: View;
  actions: object[] | string[];
  cancelButtonText?: string;  // IOS Only
}

export declare class Menu extends Common {
  public static popup(options: MenuOptions): Promise<{ id: number, title: string } | string | boolean | any>;
}
