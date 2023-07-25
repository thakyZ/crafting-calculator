import { getPage } from "../e2e-playwrite/playwright-utils";

export class AngularTemplatePage {
  navigateTo() {
    return getPage().goto('/');
  }

  getParagraphText() {
    return getPage().locator('app-root h1').innerText();
  }
}
