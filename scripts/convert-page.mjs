import fs from "fs";
import path from "path";

const root = path.resolve(import.meta.dirname, "..");
const srcPath = path.join(root, "app", "page.tsx");
const src = fs.readFileSync(srcPath, "utf8");

const styleMatch = src.match(/<style>([\s\S]*?)<\/style>/);
if (!styleMatch) throw new Error("No style block");
fs.writeFileSync(path.join(root, "app", "schela.css"), styleMatch[1].trim());

const bodyMatch = src.match(/<body>([\s\S]*?)<script>/);
if (!bodyMatch) throw new Error("No body block");
let body = bodyMatch[1].trim();

const imgMatch = body.match(/src="data:image\/jpeg;base64,([^"]+)"/);
if (imgMatch) {
  const buf = Buffer.from(imgMatch[1], "base64");
  const publicDir = path.join(root, "public");
  fs.mkdirSync(publicDir, { recursive: true });
  fs.writeFileSync(path.join(publicDir, "hero-dashboard.jpg"), buf);
  body = body.replace(
    /src="data:image\/jpeg;base64,[^"]+"/,
    'src="/hero-dashboard.jpg"'
  );
  console.log("Saved hero-dashboard.jpg", buf.length, "bytes");
}

const scriptMatch = src.match(/<script>([\s\S]*?)<\/script>/);
if (!scriptMatch) throw new Error("No script block");
fs.writeFileSync(
  path.join(root, "app", "schela-scripts.raw.js"),
  scriptMatch[1].trim()
);

fs.writeFileSync(path.join(root, "app", "schela-body.raw.html"), body);
console.log(
  "Extracted — CSS:",
  styleMatch[1].length,
  "Body:",
  body.length,
  "Script:",
  scriptMatch[1].length
);
