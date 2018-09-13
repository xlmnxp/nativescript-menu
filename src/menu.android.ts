import { Common, MenuOptions } from "./menu.common";
import * as app from "tns-core-modules/application";
export { MenuOptions } from "./menu.common";

export class Menu extends Common {
  public static popup(options: MenuOptions): Promise<string | boolean> {
    return new Promise((resolve, reject) => {
      try {
        let popupMenu = new android.widget.PopupMenu(
          app.android.context,
          options.view.android
        );
        for (let i = 0; i < options.actions.length; i++) {
          const action = options.actions[i];
          popupMenu.getMenu().add(action);
        }

        popupMenu.setOnMenuItemClickListener(
          new android.widget.PopupMenu.OnMenuItemClickListener({
            onMenuItemClick: (item): boolean => {
              resolve(item.getTitle());
              return true;
            }
          })
        );

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
