import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Dropdown' }).click();
  await expect(page.getByRole('heading')).toHaveText('Dropdown List');
  const selectedValue = page.locator('#dropdown [selected="selected"]');
  // Select item by label ''Option 2' 
  await page.locator('#dropdown').selectOption({label: 'Option 2'})
  const valueSelectedbyLabel = await selectedValue.innerText();
  expect(valueSelectedbyLabel).toEqual('Option 2')
  //Select item by index 1
  await page.locator('#dropdown').selectOption('1');
  const valueSelectedByIndex = await selectedValue.innerText();
  expect(valueSelectedByIndex).toEqual('Option 1')
  // Select item by value 2  
  await page.locator('#dropdown').selectOption('Option 2')
  const valueSelectedByValue = await selectedValue.innerText();
  expect(valueSelectedByValue).toEqual('Option 2')
});