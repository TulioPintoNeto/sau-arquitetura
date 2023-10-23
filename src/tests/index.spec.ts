import { test } from "@playwright/test";
import { PageFramework } from "./PageFramework";

const viewports = [
  { width: 1920, height: 1080 },
  { width: 1366, height: 768 },
  { width: 1024, height: 768 },
  { width: 768, height: 1024 },
  { width: 810, height: 1080 },
  { width: 360, height: 800 },
];

for (const viewport of viewports) {
  const { height, width } = viewport;
  test.describe(`viewport ${width} x ${height}`, () => {
    test.use({ viewport });

    test("should match home page", async ({ page }) => {
      const pageFramework = new PageFramework(page);

      await pageFramework.testScreenshot(`index-${width}-${height}.png`, {
        viewport,
      });
    });
  });
}
