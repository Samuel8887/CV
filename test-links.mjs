import { chromium } from "file:///C:/Users/samut/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs";

const executablePath = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const baseUrl = "http://127.0.0.1:4173/";

const browser = await chromium.launch({
  executablePath,
  headless: true,
});

const context = await browser.newContext({
  acceptDownloads: true,
  viewport: { width: 1440, height: 1200 },
});

const page = await context.newPage();
await page.goto(baseUrl, { waitUntil: "load" });

const report = [];

const downloadLink = page.locator(".cta-row .pdf-download-link");
report.push(`downloadLinkCount=${await downloadLink.count()}`);
report.push(`downloadAttr=${await downloadLink.getAttribute("download")}`);
report.push(`downloadHref=${await downloadLink.getAttribute("href")}`);

const [download] = await Promise.all([
  page.waitForEvent("download"),
  downloadLink.click(),
]);
report.push(`downloadSuggested=${download.suggestedFilename()}`);
report.push(`urlAfterDownload=${page.url()}`);

report.push(`previewDownloadLinkCount=${await page.locator(".hero-panel .pdf-download-link").count()}`);
report.push(`previewText=${await page.locator(".hero-panel .pdf-download-link").innerText()}`);

const previewDownloadLink = page.locator(".hero-panel .pdf-download-link");
const [previewDownload] = await Promise.all([
  page.waitForEvent("download"),
  previewDownloadLink.click(),
]);
report.push(`previewDownloadSuggested=${previewDownload.suggestedFilename()}`);
report.push(`urlAfterPreviewDownload=${page.url()}`);

const contactLink = page.locator(".contact-actions .pdf-download-link, .contact-actions .pdf-open-link");
report.push(`contactLinkCount=${await contactLink.count()}`);
report.push(`contactDownloadAttr=${await contactLink.getAttribute("download")}`);

const [contactDownload] = await Promise.all([
  page.waitForEvent("download"),
  contactLink.click(),
]);
report.push(`contactDownloadSuggested=${contactDownload.suggestedFilename()}`);
report.push(`urlAfterContactDownload=${page.url()}`);

const emailLink = page.locator('a[href^="mailto:"]').first();
report.push(`emailLinkCount=${await emailLink.count()}`);
report.push(`emailHref=${await emailLink.getAttribute("href")}`);

for (const hash of ["#profile", "#skills", "#timeline", "#contact"]) {
  const navLink = page.locator(`a[href="${hash}"]`).first();
  await navLink.click();
  report.push(`hashAfter${hash.slice(1)}=${new URL(page.url()).hash}`);
}

console.log(report.join("\n"));

await browser.close();
