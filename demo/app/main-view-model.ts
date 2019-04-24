import { Observable } from 'tns-core-modules/data/observable';
import { Menu } from 'nativescript-menu';
import { Page } from 'tns-core-modules/ui/page/page';

export class HelloWorldModel extends Observable {
  public message: string;
  private menu: Menu;

  constructor(public page: Page) {
    super();
  }

  buttonTap(){
    Menu.popup({
      view: this.page.getViewById("menuBtn"),
      actions: ["Example","NativeScript","Menu"]
    }).then(action => {
      if(action.id == 0){
        alert(action.title);
      } else {
        alert("else action");
      }
    }).catch(console.log);
  }
}
