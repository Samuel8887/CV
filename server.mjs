// Optional local preview server. Run with: node server.mjs
// Uses only Node.js built-in modules; no package installation needed.
import http from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".pdf": "application/pdf"
};

http.createServer(async (request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end("Method not allowed");
    return;
  }
  try {
    const url = new URL(request.url, "http://127.0.0.1");
    const pathname = decodeURIComponent(url.pathname);
    const filename = path.resolve(root, `.${pathname === "/" ? "/index.html" : pathname}`);
    const relative = path.relative(root, filename);
    if (relative.startsWith("..") || path.isAbsolute(relative)) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }
    const data = await readFile(filename);
    response.writeHead(200, {
      "Content-Type": contentTypes[path.extname(filename)] || "application/octet-stream"
    });
    response.end(request.method === "HEAD" ? undefined : data);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("File not found");
  }
}).listen(4173, "127.0.0.1", () => {
  console.log("Your CV website is ready: http://127.0.0.1:4173");
});
