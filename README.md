# nativescript-menu [![Build Status](https://travis-ci.org/xlmnxp/nativescript-menu.svg?branch=master)](https://travis-ci.org/xlmnxp/nativescript-menu)

A plugin that adds a pop-up menu to NativeScript

### Installation

From your command prompt/terminal go to your app's root folder and execute:

`tns plugin add nativescript-menu`

## Demo

<img alt="screenshot 1" src="https://raw.githubusercontent.com/xlmnxp/nativescript-menu/master/screenshots/screenshotAndroid.gif" width="170">

## Usage

###

```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd" loaded="pageLoaded" class="page"
  xmlns:ui="nativescript-menu">
  <StackLayout class="p-20">
    <Button id="menuBtn" text="getMenu" tap="{{ buttonTap }}"/>
  </StackLayout>
</Page>
```

```typescript
import { Menu } from "nativescript-menu";

export class HelloWorldModel extends Observable {
  public message: string;
  private menu: Menu;

  constructor(public page: Page) {
    super();
  }

  buttonTap() {
    Menu.popup({
      view: this.page.getViewById("menuBtn"),
      actions: ["Example", "NativeScript", "Menu"]
    })
    .then(action => {
      alert(action.id + " - " + action.title);
    })
    .catch(console.log);
  }
}
```

with custom options
```typescript
import { Menu } from "nativescript-menu";

export class HelloWorldModel extends Observable {
  public message: string;
  private menu: Menu;

  constructor(public page: Page) {
    super();
  }

  buttonTap() {
    Menu.popup({
      view: this.page.getViewById("menuBtn"),
      actions: [{ id: "one", title: "Example" }, { id: "two", title: "NativeScript", customOption: "Hello" }, { id: "three", title: "Menu" }]
    })
    .then(action => {
      alert(JSON.stringify(action))
    })
    .catch(console.log);
  }
}
```

## API

- MenuOptions
```typescript
export interface MenuOptions {
  title: string; // iOS only
  message: string; // iOS only
  view: View;
  actions: any[];
  cancelButtonText?: string; // iOS only
}
```

| Method                                                      | Description                      |
| ----------------------------------------------------------- | -------------------------------- |
| **popup(options: MenuOptions)**: Promise<{id: number, title: string} \| actionObject \| boolean> | Create a pop-up menu and show it |
