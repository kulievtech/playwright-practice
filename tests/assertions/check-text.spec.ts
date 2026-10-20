import { test, expect } from "@playwright/test";

test("Check Element Text", async ({ page }) => {
  // Navigate to the target webpage
  await page.goto("https://selectors-practice.onrender.com/");

  // Verify the text content of the paragraph in the Text Section
  const textSectionParagraph = await page
    .locator("#textParagraph")
    .textContent();

  // This is a sample text for Playwright assertions.

  expect(textSectionParagraph).toContain("sample text");
});
