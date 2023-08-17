import { test, expect } from "@playwright/test";
import AuthServices from "../services/auth.services";

test("vendor login", async ({ page }) => {
  const token = await AuthServices.createToken("+12052052052");

  await page.addInitScript((value) => {
    window.localStorage.setItem("selectedWhmcsId", "10");

    window.localStorage.setItem("token", value);
  }, token);
  console.log(token);

  await page.goto("/admin/analytics");
  await expect(page.getByText("Total Amount")).toBeVisible();
  await page.getByText("Deal", { exact: true }).click();
  await page.getByText("List", { exact: true }).click();
  await expect(page.getByText("Published", { exact: true })).toBeVisible();
  await page.waitForTimeout(2000);
  await page.close();
});
