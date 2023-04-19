import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:5173/';

test('app renders text and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const paragraph = page.getByRole('paragraph');
  const img = page.getByRole('img');

  const textContent = await paragraph.textContent();
  const imgSrc = await img.getAttribute('src');

  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imgSrc?.startsWith('https://cataas.com')).toBeTruthy();
});
