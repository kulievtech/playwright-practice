import { test, expect } from "@playwright/test";

test("truthy and falsy values", async () => {
  const a = true;
  const b = null;

  expect(a).toBeTruthy();
  expect(b).toBeFalsy();
});

test("equality checks", async () => {
  const num = 10;
  const str = "Hello";

  const colors = ["red", "blue"];

  expect.soft(num).toBe(2932932);
  expect.soft(str).toEqual("Hellooooooo");

  expect(colors).toEqual(["red", "blue", "yellow"]);
  ///

  ///

  ///

  ///

  ///

  ///
});

test("comparison checks", async () => {
  const score = 85;

  expect(score).toBeGreaterThan(80);
  expect(score).toBeGreaterThanOrEqual(85);
  expect(score).toBeLessThan(100);
  expect(score).toBeLessThanOrEqual(85);
});
