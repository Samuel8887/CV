import { chromium } from "file:///C:/Users/samut/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs";

const executablePath = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const baseUrl = "http://127.0.0.1:4173/";

const browser = await chromium.launch({
  executablePath,
  headless: true,
});

const page = await browser.newPage({
  viewport: { width: 1440, height: 1200 },
});

await page.goto(baseUrl, { waitUntil: "load" });

const previewImage = page.locator(".document-preview-image");
const result = [
  `previewCount=${await previewImage.count()}`,
  `previewVisible=${await previewImage.isVisible()}`,
  `previewSrc=${await previewImage.getAttribute("src")}`,
  `downloadLinkCount=${await page.locator('.pdf-download-link').count()}`,
];

console.log(result.join("\n"));

await page.screenshot({
  path: "C:/Users/samut/Downloads/Codex 1/cv-desktop.png",
  fullPage: false,
});

await browser.close();
