import { View, isAndroid, isIOS } from "tns-core-modules/ui/page";

export interface MenuOptions {
  view: View;
  actions: any[];
  cancelButtonText?: string;
}

export class Common {
  public message: string;
}
