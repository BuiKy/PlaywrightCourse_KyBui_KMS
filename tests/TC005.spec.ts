import { test, expect } from '@playwright/test';
import path from 'node:path/win32';

test('test', async ({ page }) => {
  //"Go to https://the-internet.herokuapp.com/ and Select 'File upload' link"
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', {name: "File Upload"}).click();
  //verify header "File Uploader" is displayed
  await expect(page.getByRole('heading')).toHaveText('File Uploader');
//Select file and click upload
await page.locator('#file-upload').setInputFiles(path.join(__dirname, 'FileUploads/pikachu.png'));
await page.locator('#file-submit').click();
//Verify The message - which containing the file name is shown
await expect(page.locator('#uploaded-files')).toContainText('pikachu')

});