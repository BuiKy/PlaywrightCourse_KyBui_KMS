import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  const name ='Dona'
  const adress = 'TXA NUI THA QUANGAMN'
//   Fill name 
await page.locator('#name').fill(name)
//the name input display the inputted value
const nameInput = await page.locator('#name').inputValue();
expect(nameInput).toEqual(name)
// Fill address
await page.locator('#textarea').fill(adress)
//the adress textarea display the inputted value
const addressInput = await page.locator('#textarea').inputValue();
expect(addressInput).toEqual(adress)
// clear name
await page.locator('#name').clear()
//the name input is cleared
expect(page.locator('#name')).toBeEmpty();
// clear address
await page.locator('#textarea').clear()
//the adress textarea is cleared
expect(page.locator('#textarea')).toBeEmpty()

});
