import path from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "file:///C:/Users/samut/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs";

const root = "C:/Users/samut/Downloads/Codex 1";
const executablePath = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const sourceUrl = pathToFileURL(path.join(root, "cv-print.html")).href;
const outputPath = path.join(root, "assets", "Samuel_Madsen_CV.pdf");

const browser = await chromium.launch({
  executablePath,
  headless: true,
  args: ["--allow-file-access-from-files"],
});

const page = await browser.newPage({
  viewport: { width: 1440, height: 2048 },
});

await page.goto(sourceUrl, { waitUntil: "load" });
await page.pdf({
  path: outputPath,
  format: "A4",
  printBackground: true,
  margin: {
    top: "0mm",
    right: "0mm",
    bottom: "0mm",
    left: "0mm",
  },
});

await browser.close();
