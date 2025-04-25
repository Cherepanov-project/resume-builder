import { test } from '@playwright/test';

test('User can log in and access the letter builder page', async ({ page }) => {
    // Переход на страницу логина
    await page.goto('http://localhost:5173/sign-up');

    // Ожидание и заполнение формы регистрации
    await page.fill('input[id="email"]', 'test123@gmail.com');
    await page.fill('input[id="password"]', 'test123TEST');
    await page.fill('input[id="repeatPassword"]', 'test123TEST');

    // Нажатие кнопки и ожидание редиректа на Auth0
    await Promise.all([
        page.waitForURL(/auth0.com\/u\/login/),
        page.click('button[type="submit"]')
    ]);

    // Явное ожидание формы логина
    await page.waitForSelector('#username', { state: 'visible', timeout: 15000 });
    await page.fill('#username', 'test123@gmail.com');
    await page.fill('#password', 'test123@gmail.com');

    await page.click('button[type="submit"]')

    // Проверка целевой страницы
    await page.goto('http://localhost:5173/intro');

    // Ожидание и взаимодействие с кнопкой
    // const stringsButton = page.locator('button[type="button"]');
    // 1. Вариант с точным test-id
    // const stringsButton = page.locator('[data-testid="tab-строки"]');
    // await expect(stringsButton).toBeVisible({ timeout: 10000 });

    // const stringsButton = page.getByTestId('tab-1');
    // await stringsButton.click();
});