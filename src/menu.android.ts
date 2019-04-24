import { Common, MenuOptions } from "./menu.common";
import * as app from "tns-core-modules/application";
export { MenuOptions } from "./menu.common";
import * as Types from 'tns-core-modules/utils/types';

export class Menu extends Common {

  public static popup(options: MenuOptions): Promise<{ id: number, title: string } | any | boolean> {
    return new Promise((resolve, reject) => {
      try {
        let popupMenu = new android.widget.PopupMenu(
          app.android.context,
          options.view.android
        );

        if (options.actions[0] !== undefined) {
          if (Types.isString(options.actions[0])) {
            for (let i = 0; i < options.actions.length; i++) {
              const action = options.actions[i];
              popupMenu.getMenu().add(action);
            }

            popupMenu.setOnMenuItemClickListener(
              new android.widget.PopupMenu.OnMenuItemClickListener({
                onMenuItemClick: (item): boolean => {
                  resolve({
                    id: options.actions.indexOf(item.getTitle()),
                    title: item.getTitle()
                  });
                  return true;
                }
              })
            );
          } else {
            for (let i = 0; i < options.actions.length; i++) {
              const action = options.actions[i];
              if (action.title !== undefined) {
                popupMenu.getMenu().add(action.title);
              }
            }

            popupMenu.setOnMenuItemClickListener(
              new android.widget.PopupMenu.OnMenuItemClickListener({
                onMenuItemClick: (item): boolean => {
                  resolve(Object.assign({
                    id: options.actions.find(actionItem => actionItem.title === item.getTitle()).id || options.actions.indexOf(options.actions.find(actionItem => actionItem.title === item.getTitle()))
                  }, options.actions.find(actionItem => actionItem.title === item.getTitle())));
                  return true;
                }
              })
            );
          }
        }

        popupMenu.setOnDismissListener(
          new android.widget.PopupMenu.OnDismissListener({
            onDismiss: () => {
              resolve(false);
            }
          })
        );

        setTimeout(() => {
          popupMenu.show();
        }, 1);
      } catch (error) {
        reject(error);
      }
    });
  }
}
