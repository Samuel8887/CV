import path from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "file:///C:/Users/samut/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs";

const root = "C:/Users/samut/Downloads/Codex 1";
const executablePath = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const sourceUrl = pathToFileURL(path.join(root, "cv-print.html")).href;
const outputPath = path.join(root, "assets", "cv-preview.png");

const browser = await chromium.launch({
  executablePath,
  headless: true,
  args: ["--allow-file-access-from-files"],
});

const page = await browser.newPage({
  viewport: { width: 1280, height: 1800 },
  deviceScaleFactor: 1.4,
});

await page.goto(sourceUrl, { waitUntil: "load" });
await page.screenshot({
  path: outputPath,
  fullPage: false,
});

await browser.close();
