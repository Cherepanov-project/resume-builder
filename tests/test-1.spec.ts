import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/sign-up');
  await page.getByRole('textbox', { name: 'E-mail' }).click();
  await page.getByRole('textbox', { name: 'E-mail' }).fill('testuser@example.com');
  await page.getByRole('textbox', { name: 'Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('test123TEST');
  await page.getByRole('textbox', { name: 'Repeat Password' }).click();
  await page.getByRole('textbox', { name: 'Repeat Password' }).fill('test123TEST');
  await page.getByRole('checkbox', { name: 'Remember me' }).check();
  await page.getByRole('button', { name: 'Sign Up' }).click();
  
  await page.goto('http://localhost:5173/letter-builder-page');
  await page.locator('button[type="button"]').click();
  await page.goto('http://localhost:5173/letter-builder-page');await page.goto('http://localhost:5173/letter-builder-page');

});