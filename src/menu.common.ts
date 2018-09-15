import { View, isAndroid, isIOS } from "tns-core-modules/ui/page";
import * as dialogs from "tns-core-modules/ui/dialogs";

export interface MenuOptions {
  view: View;
  actions: string[];
  cancelButtonText?: string;
}

export class Common {
  public message: string;

  constructor() {}

  public static popup(options: MenuOptions): Promise<string | boolean> {
    return new Promise((resolve, reject) => {
      dialogs
        .action(options)
        .then(result => {
          if (result === options.cancelButtonText) {
            resolve(false);
            return;
          }
          resolve(result);
        })
        .catch(reject);
    });
  }
}
