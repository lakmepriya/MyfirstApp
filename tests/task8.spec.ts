import { test } from "@playwright/test";

test('Switch Windows', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/windows');
  await page.waitForTimeout(3000);

  // Parent page
  const parentPage = page;

  // Open new window
  const [childPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('text=Click Here').click()
  ]);

  // Child window
  await childPage.waitForLoadState();
  console.log(await childPage.title());

  // Switch back to parent window
  await parentPage.bringToFront();
  console.log(await parentPage.title());

  // Again switch to child window
  await childPage.bringToFront();
  console.log(await childPage.title());
});
