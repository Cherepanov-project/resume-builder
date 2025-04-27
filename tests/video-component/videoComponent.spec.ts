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

    // Отправка формы входа и ожидание редиректа
    await Promise.all([
        page.waitForURL('http://localhost:5173/intro', { timeout: 15000 }),
    ]);

    await page.waitForSelector('h5:has-text("EMAIL CONSTUCTION")', { state: 'visible', timeout: 15000 }),
    await page.locator('h5:has-text("EMAIL CONSTUCTION")').click()

    await page.waitForSelector('button:has-text("Create")', { state: 'visible', timeout: 15000 }),
    await page.locator('button:has-text("Create")').click()

    // Ожидание и взаимодействие с кнопкой
    await page.locator('button.tab-1').click();


    const targetContainer = page.locator('.react-grid-layout');
    const targetLine = page.locator('[data-testid="line"]').first();

    await targetLine.hover();
        
    // Перетаскивание блок в контейнер
    await targetLine.dragTo(targetContainer, {
        targetPosition: { x: 100, y: 100 },
        sourcePosition: { x: 10, y: 10 }
    });

    await targetContainer.dispatchEvent('mouseup');

    // Работа с содержимым
    await page.locator('button.tab-0').click();

    const targetCell = page.locator('.MuiTableCell-root');
    const targetElement = page.locator('[data-testid="video-icon"]');

    const parentElement = targetElement.locator('..');
    await parentElement.hover();
    
    // Перетаскивание элемента
    await parentElement.dragTo(targetCell, {
        targetPosition: { x: 100, y: 100 },
        sourcePosition: { x: 10, y: 10 },
        force: true,
        timeout: 60000,
    });

    await targetCell.dispatchEvent('mouseup');
    
});