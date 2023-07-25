import { getPage } from "../playwright-utils";
import { Page } from "@playwright/test";

export class AngularTemplatePage extends Page {
  navigateTo() {
    return getPage().goto('/');
  }

  getParagraphText() {
    return getPage().locator('app-root h1').innerText();
  }
}
