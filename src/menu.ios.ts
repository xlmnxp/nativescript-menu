import { Common, MenuOptions } from './menu.common';
export { MenuOptions } from './menu.common';
import { action } from "@nativescript/core/ui/dialogs";

export class Menu extends Common {
    public static popup(options: MenuOptions): Promise<{ id: number, title: string } | string | boolean | any> {
        return new Promise(function (resolve, reject) {
            try {
                action({
                    title: options.title, 
                    message: options.message,
                    cancelButtonText: options.cancelButtonText,
                    actions: options.actions.map(r => r.title  || r)
                }).then(result => {
                    if (result) {
                            let action = options.actions.filter(action => action.title == result)[0];
                            if(action) {
                                resolve(action)
                            } else {
                                resolve({
                                    id: options.actions.indexOf(result),
                                    title: result
                                })
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