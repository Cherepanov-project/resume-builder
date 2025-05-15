import { test } from "@playwright/test";

test("User can log in and access the letter builder page", async ({ page }) => {
  // Переход на страницу логина
  await page.goto("http://localhost:5173/sign-up");

  // Ожидание и заполнение формы регистрации
  await page.fill('input[id="email"]', "test123@gmail.com");
  await page.fill('input[id="password"]', "test123TEST");
  await page.fill('input[id="repeatPassword"]', "test123TEST");

  // Нажатие кнопки и ожидание редиректа на Auth0
  await Promise.all([page.waitForURL(/auth0.com\/u\/login/), page.click('button[type="submit"]')]);

  // Явное ожидание формы логина
  await page.waitForSelector("#username", { state: "visible", timeout: 15000 });
  await page.fill("#username", "test123@gmail.com");
  await page.fill("#password", "test123@gmail.com");
  await page.click('button[type="submit"]');

  // Отправка формы входа и ожидание редиректа
  await Promise.all([page.waitForURL("http://localhost:5173/intro", { timeout: 15000 })]);

  await page.waitForSelector('h5:has-text("EMAIL CONSTUCTION")', {
    state: "visible",
    timeout: 15000,
  }),
    await page.locator('h5:has-text("EMAIL CONSTUCTION")').click();

  await page.waitForSelector('button:has-text("Create")', { state: "visible", timeout: 15000 }),
    await page.locator('button:has-text("Create")').click();
  await page.getByRole("button", { name: "Строки" }).click();

  //общее
  await page.getByRole("button", { name: "Строки" }).click();

  const targetContainer = page.locator(".react-grid-layout");
  const targetLine = page.locator('[data-testid="line"]').first();
  //наводим на таргетлайн слева
  await targetLine.hover();

  // Перетаскивание блок в контейнер
  await targetLine.dragTo(targetContainer);

  await targetContainer.dispatchEvent("mouseup");

  // Работа с содержимым
  await page.locator("button.tab-0").click();

  // переносим элемент слева в блок
  await page
    .locator("div")
    .filter({ hasText: /^Видео$/ })
    .first()
    .hover();
  await page.mouse.down();
  await page.getByRole("cell", { name: "блок" }).hover();
  await page.mouse.up();
  await page.getByTestId("0").locator("div").nth(1).click();

  await page
    .getByRole("textbox", { name: "https://www.youtube.com/watch?v=" })
    .fill("https://www.youtube.com/watch?v=paWE-GvDO1c");
  await page.getByTestId("0").getByRole("button", { name: "Сохранить" }).click();
});
