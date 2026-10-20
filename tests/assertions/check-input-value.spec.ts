import { test, expect } from "@playwright/test";

test("Check Input Value", async ({ page }) => {
  // Navigate to the target webpage
  await page.goto("https://selectors-practice.onrender.com/");

  // Type into the input field
  const inputField = page.locator("#username");
  await inputField.fill("testuser@qa.com");

  // Verify the value of the input field
  const inputValue = await inputField.inputValue();
  expect(inputValue).toBe("testuser@qa.com");
  expect(inputValue).toContain("testuser@qa.com");
});
