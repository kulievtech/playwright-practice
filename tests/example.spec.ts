import { test, expect } from "@playwright/test";

test(
  "Selectors Practice - Basic Interactions",
  { tag: ["@smoke"] },
  async ({ page }) => {
    // 🌐 Navigate to the new website
    await page.goto("https://selectors-practice.onrender.com/");

    // ⏳ Wait for main heading to be visible
    await page.waitForSelector("h2[title='Login-form']");

    await page.waitForTimeout(2000); // hard coded wait - Really bad tests

    // ✅ Assertion - Verify page title text
    const heading = await page.textContent("h2[title='Login-form']");
    expect(heading).toEqual("Login Form");

    // ⌨️ Fill input using ID selector
    await page.fill("#username", "Alexa");

    await page.waitForTimeout(2000); // hard coded wait - Really bad tests

    // ⌨️ Fill email field using placeholder selector
    await page.fill("input[placeholder='Password']", "john@example.com");

    await page.waitForTimeout(2000); // hard coded wait - Really bad tests

    // 🖱️ Click button using xpath attribute and text selector
    await page.click("//button[@type='submit'][text()='Login']");

    // ⏳ Wait for success message and get the text
    await page.waitForSelector("#loginMessage");
    const successMessage = await page.textContent("#loginMessage");

    // ✅ Assertion - Verify success message appears
    expect(successMessage).toContain("Alexa");
  },
);
