import { test, expect } from "@playwright/test";

test("Handle new tab", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  await page.waitForTimeout(2000);

  // Listen for new page (tab) event
  const [newPage] = await Promise.all([
    page.waitForEvent("popup"), // Wait for the new tab
    page.click("#openNewTabBtn"), // Clicking this button opens a new tab
  ]);

  // Interact with the new tab
  await newPage.waitForLoadState("domcontentloaded");
  const newPageTitle = await newPage.title();
  expect(newPageTitle).toBe("New Tab Page");

  await page.click("#nextStepButton");

  const heading = await newPage.locator("h1").textContent();
  expect(heading).toBe("Welcome to the New Tab");
});
