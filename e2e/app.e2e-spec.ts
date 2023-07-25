import { AngularTemplatePage } from './app.po';
import { expect } from "@playwright/test";
import { test, setPage } from "../playwright-utils";

test.describe('angular-template App', () => {
  let page: AngularTemplatePage;

  test.beforeEach(async ({page}) => {
    setPage(page);
    page = new AngularTemplatePage();
  });

  test('should display welcome message', async ({page}) => {
    setPage(page);
    await page.navigateTo();
    expect(await page.getParagraphText()).toEqual('Welcome to app!');
  });
});
