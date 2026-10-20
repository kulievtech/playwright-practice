import { test, expect } from "@playwright/test";

test("Check if element is visible", async ({ page }) => {
  // Navigate to the target webpage
  await page.goto("https://selectors-practice.onrender.com/");

  // Grab the selector for the "Text Section" header
  const selector = "//h2[text()='Text Section']";
  await page.locator(selector).scrollIntoViewIfNeeded();

  // Assert that the "Text Section" header is visible
  const isTextSectionHeaderVisible = await page.locator(selector).isVisible();
  expect(isTextSectionHeaderVisible).toBe(true);
  // or
  expect(isTextSectionHeaderVisible).toBeTruthy();
});
