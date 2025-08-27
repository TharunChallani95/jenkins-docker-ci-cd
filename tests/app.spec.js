const { test, expect } = require('@playwright/test');

test('Homepage should load and display correct message', async ({ page }) => {
  await page.goto('http://localhost:8080');
  await expect(page.locator('h1')).toHaveText('Hello from Jenkins-Docker CI/CD Demo!');
  await page.screenshot({ path: 'screenshots/homepage.png' });
});
