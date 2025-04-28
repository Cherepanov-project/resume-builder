// import { test, expect } from '@playwright/test';

// test('User can log in and access the letter builder page', async ({ page }) => {
//     await page.goto('https://dev-xpamu0sjzvg4op05.us.auth0.com/u/login?state=hKFo2SBvdFdHeDFkSGJ6OWJjcW14RHZyZUN0RUc3SjRtS1hOUKFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIGltRWFEdTExZEtVNjBxQjRYVlEtVzJnM29GdjJiWVJoo2NpZNkgbUw1YTJYZVg2dm5UaFhUS0pLckhIYnoxZVBhTEt3Tzc');

//     // Заполнение формы авторизации
//     await page.fill('#username', 'testuser@example.com');
//     await page.fill('#password', 'test123TEST');

//     // Нажатие кнопки "Continue"
//     await page.click('button[type="submit"][name="action"]');

//     // Проверка того, что мы перешли на нужную страницу
//     await page.goto('http://localhost:5173/letter-builder-page');
//     console.log('URL страницы после перехода:', page.url());


//     // Ожидание кнопки "Строки"
//     const stringsButton = await page.waitForSelector('button[data-test="Строки"]', { state: 'visible', timeout: 15000 });
  
//     await expect(stringsButton).toBeVisible();

//     // Нажимаем на кнопку "Строки"
//     await stringsButton.click();
// });


import { test } from '@playwright/test';

test('User can log in and access the letter builder page', async ({ page }) => {
    // Переход на страницу логина
    await page.goto('http://localhost:5173/sign-up');
    
    // Ожидание и заполнение формы регистрации
    await page.fill('input[id="email"]', 'testuser@example.com');
    await page.fill('input[id="password"]', 'test123TEST');
    await page.fill('input[id="repeatPassword"]', 'test123TEST');
    
    // Нажатие кнопки и ожидание редиректа на Auth0
    await Promise.all([
        page.waitForURL(/auth0\.com\/u\/login/),
        page.click('button[type="submit"]')
    ]);
    
    // Явное ожидание формы логина
    await page.waitForSelector('#username', { state: 'visible', timeout: 15000 });
    await page.fill('#username', 'testuser@example.com');
    await page.fill('#password', 'test123TEST');
    
    // Проверка целевой страницы
    await page.goto('http://localhost:5173/letter-builder-page');
    
    // // Ожидание и взаимодействие с кнопкой
    // const stringsButton = page.locator('button[type="button"]');
    // 1. Вариант с точным test-id
    // const stringsButton = page.locator('[data-testid="tab-строки"]');
    // await expect(stringsButton).toBeVisible({ timeout: 10000 });
    const stringsButton = page.getByTestId('tab-1');
    await stringsButton.click();
    
    
});