import path from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "file:///C:/Users/samut/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs";

const root = "C:/Users/samut/Downloads/Codex 1";
const executablePath = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const targetUrl = pathToFileURL(path.join(root, "index.html")).href;

const shots = [
  { name: "cv-desktop", width: 1440, height: 1800 },
  { name: "cv-tablet", width: 900, height: 1600 },
  { name: "cv-mobile", width: 390, height: 1600 },
];

const browser = await chromium.launch({
  executablePath,
  headless: true,
  args: ["--allow-file-access-from-files"],
});

for (const shot of shots) {
  const page = await browser.newPage({
    viewport: { width: shot.width, height: shot.height },
    deviceScaleFactor: 1,
  });

  await page.goto(targetUrl, { waitUntil: "load" });
  await page.waitForTimeout(1800);
  await page.screenshot({
    path: path.join(root, `${shot.name}.png`),
    fullPage: true,
  });
  await page.close();
}

await browser.close();
