import { test } from "@playwright/test";

test("User can log in and access the letter builder page", async ({ page }) => {
  await page.goto("http://localhost:5173/intro");
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
    .filter({ hasText: /^Картинки$/ })
    .first()
    .hover();
  await page.mouse.down();
  await page.getByRole("cell", { name: "блок" }).hover();
  await page.mouse.up();
  await page.getByTestId("0").locator("div").nth(1).click();
});
