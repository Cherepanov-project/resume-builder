import { test as setup } from "@playwright/test";

const authFile = "../resume-builder/playwright/.auth/user.json";

setup("authenticate", async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  // Процесс аутентификации
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
  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});
