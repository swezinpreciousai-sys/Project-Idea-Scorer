const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

// Clean SVG icons sized to match text-2xl and vertically aligned
const ICONS = {
  '💡': `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-top:-2px;margin-right:4px"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>`,

  '📝': `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-top:-2px;margin-right:4px"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,

  '🎯': `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-top:-2px;margin-right:4px"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,

  '🚀': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-top:-1px;margin-right:3px"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>`,
};

async function takeScreenshot(url, viewport, filename) {
  console.log(`\nTaking: ${filename} (${viewport.width}x${viewport.height})`);

  const browser = await chromium.launch({
    headless: true,
    env: {
      ...process.env,
      LD_LIBRARY_PATH: `${process.env.HOME}/chrome-libs/usr/lib/x86_64-linux-gnu:${process.env.LD_LIBRARY_PATH || ''}`
    }
  });

  try {
    const page = await browser.newPage();
    await page.setViewportSize(viewport);
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

    // Replace emoji characters with properly sized inline SVG icons
    await page.evaluate((icons) => {
      // Fix emojis in h2 elements
      const h2Elements = document.querySelectorAll('h2');
      h2Elements.forEach(h2 => {
        let html = h2.innerHTML;
        for (const [emoji, svg] of Object.entries(icons)) {
          if (html.includes(emoji)) {
            html = html.replace(emoji, svg);
          }
        }
        h2.innerHTML = html;
      });

      // Fix emojis in h4 elements (ResultCard uses these)
      const h4Elements = document.querySelectorAll('h4');
      h4Elements.forEach(h4 => {
        let html = h4.innerHTML;
        for (const [emoji, svg] of Object.entries(icons)) {
          if (html.includes(emoji)) {
            html = html.replace(emoji, svg);
          }
        }
        h4.innerHTML = html;
      });

      // Fix the badge emoji too
      const badge = document.querySelector('span');
      if (badge && badge.textContent && badge.textContent.includes('🚀')) {
        badge.innerHTML = badge.innerHTML.replace('🚀', icons['🚀']);
      }

      // Remove red buttons / red elements
      const redElements = document.querySelectorAll('[class*="bg-red-"], [class*="text-red-"]');
      redElements.forEach(el => {
        el.classList.remove(...Array.from(el.classList).filter(c => c.includes('red')));
        el.classList.add('bg-slate-100', 'text-slate-600');
      });
    }, ICONS);

    await page.waitForTimeout(500);

    const filepath = path.join(__dirname, 'screenshots', filename);
    await page.screenshot({ path: filepath, fullPage: true });

    const stats = fs.statSync(filepath);
    if (stats.size > 0) {
      console.log(`✓ Verified: ${filename} (${(stats.size / 1024).toFixed(1)} KB)`);
      return true;
    } else {
      console.error(`✗ Failed: ${filename} - empty file`);
      return false;
    }
  } catch (err) {
    console.error(`✗ Failed: ${filename} - ${err.message}`);
    return false;
  } finally {
    await browser.close();
  }
}

async function main() {
  const url = 'https://ai-project-idea-scorer.vercel.app/';

  const screenshots = [
    { viewport: { width: 375, height: 812 }, filename: 'mobile-home-375x812.png' },
    { viewport: { width: 1280, height: 800 }, filename: 'desktop-home-1280x800.png' },
    { viewport: { width: 768, height: 1024 }, filename: 'tablet-home-768x1024.png' },
  ];

  for (const shot of screenshots) {
    const success = await takeScreenshot(url, shot.viewport, shot.filename);
    if (!success) {
      console.error('\nStopping - screenshot failed');
      process.exit(1);
    }
  }

  console.log('\n✓ All screenshots completed and verified!');

  const files = fs.readdirSync(path.join(__dirname, 'screenshots'));
  console.log('\nScreenshots saved:');
  files.forEach(f => {
    const stats = fs.statSync(path.join(__dirname, 'screenshots', f));
    console.log(`  ${f} (${(stats.size / 1024).toFixed(1)} KB)`);
  });
}

main().catch(console.error);
