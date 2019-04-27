import { View } from "tns-core-modules/ui/page";

export interface MenuOptions {
  title: string;
  message: string;
  view: View;
  actions: any[];
  cancelButtonText?: string;
}

export class Common {}
