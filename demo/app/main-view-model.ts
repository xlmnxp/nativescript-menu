import { Observable } from '@nativescript/core';
import { Menu } from 'nativescript-menu';
import { Page } from '@nativescript/core';

export class HelloWorldModel extends Observable {
  public message: string;

  constructor(public page: Page) {
    super();
  }

  buttonTap() {
    Menu.popup({
      view: this.page.getViewById("menuBtn"),
      actions: [{ id: "one", title: "Example" }, { id: "two", title: "NativeScript" }, { id: "three", title: "Menu" }]
    }).then(action => {
      if (action.id === 0) {
        alert(action.title);
      } else {
        alert("else action2");
      }
    }).catch(console.log);
  }
}
