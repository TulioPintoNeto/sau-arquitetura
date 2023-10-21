import { Page, expect } from "@playwright/test";

interface ScreenshotOptions {
  viewport: {
    height: number;
    width: number;
  };
}

export class PageFramework {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async testScreenshot(name: string, { viewport }: ScreenshotOptions) {
    await this.prepare(viewport.height);

    // Some time to load all images and set URL params
    await new Promise((res) => setTimeout(res, 3000));

    await expect(this.page).toHaveScreenshot(name, { fullPage: true, timeout: 10000 });
  }

  private prepare(height: number) {
    return this.page.goto(`/?isTestPurpose=true&homeMainHeight=${height}`);
  }
}
