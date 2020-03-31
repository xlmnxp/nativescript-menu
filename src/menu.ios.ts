import { Common, MenuOptions } from './menu.common';
export { MenuOptions } from './menu.common';
import * as Types from 'tns-core-modules/utils/types';
import { action } from "tns-core-modules/ui/dialogs";

export class Menu extends Common {
    public static popup(options: MenuOptions): Promise<{ id: number, title: string } | string | boolean | any> {
        return new Promise(function (resolve, reject) {
            try {
                action({
                    title: options.title, 
                    message: options.message,
                    cancelButtonText: options.cancelButtonText,
                    actions: options.actions.map(r => r.title)
                }).then(result => {
                    if (result) {
                            let action = options.actions.filter(action => action.title == result)[0];
                            if(action == undefined) {
                                resolve({
                                    id: options.actions.indexOf(result),
                                    title: result
                                })
                            } else {
                                resolve(action)
                            }

                            if(result == options.cancelButtonText) {
                                resolve(false);
                            }
                    }
                }).catch(reject);
            }
            catch (error) {
                reject(error);
            }
        });
    }
}