import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Drag and Drop' }).click();
  await expect(page.getByRole('heading')).toHaveText('Drag and Drop');
  const sourceElement = page.locator('#column-a');
  const targetElement = page.locator('#column-b');
  await sourceElement.dragTo(targetElement);
  await expect(sourceElement).toHaveText("B");
  await expect(targetElement).toHaveText("A")
});