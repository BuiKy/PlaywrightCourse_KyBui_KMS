import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/');
// On the tab list, click "Iframe"
await page.getByRole('tab',{name: 'iFrame'}).click()
const iframeLocator = page.frameLocator('iframe.lazyloaded');
// On the iframe, input the search with text "Playwright"
await iframeLocator.locator('input[name="s"]').fill('Playwright');
// Click "search" icon
await iframeLocator.locator('.button_search').click();
//Verify the message "Sorry, no posts matched your criteria." is displayed
const messageActual = await iframeLocator.locator('.search_res').innerText();
expect(messageActual).toContain("Sorry, no posts matched your criteria")

});