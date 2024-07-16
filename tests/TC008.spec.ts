import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  //Verify The header is displayed
  await expect(page.getByRole('heading').filter({hasText: "JS Alerts"})).toHaveText('JS Alerts')
//   Click "Prompt" button to trigger and validate default prompt value
await page.getByRole('button', {name: 'Prompt'}).click();
// The message is "Please enter your name:", the defaut prompt value is: "Harry Potter"
page.on('dialog', async dialog => {
    expect(dialog.type()).toContain('promt');
    expect(dialog.message()).toContain('Please enter your name:')
    expect(dialog.defaultValue()).toBe('Harry Potter')
    //Accept prompt with {your_name}
    const yourName = 'Ky Bui';
    await dialog.accept(yourName);
    // The message"Hello {your_name! How are you today?'" is shown
    const messageActual = await page.locator('#demo').innerText();
    console.log(messageActual);
    await expect(messageActual).toEqual(`Hello ${yourName}! How are you today?`)
})



});