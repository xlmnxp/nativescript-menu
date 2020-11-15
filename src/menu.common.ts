import { View } from "@nativescript/core";

export interface MenuOptions {
  title: string;
  message: string;
  view: View;
  actions: any[];
  cancelButtonText?: string;
}

export class Common {}
