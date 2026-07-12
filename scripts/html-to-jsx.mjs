import fs from "fs";
import path from "path";

const root = path.resolve(import.meta.dirname, "..");

function camelCaseProp(prop) {
  return prop.trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function convertInlineStyle(styleStr) {
  const obj = {};
  for (const rule of styleStr.split(";")) {
    const trimmed = rule.trim();
    if (!trimmed) continue;
    const colon = trimmed.indexOf(":");
    if (colon === -1) continue;
    const rawKey = trimmed.slice(0, colon).trim();
    const value = trimmed.slice(colon + 1).trim();
    const key = rawKey.startsWith("--") ? rawKey : camelCaseProp(rawKey);
    obj[key] = value;
  }
  const entries = Object.entries(obj)
    .map(([k, v]) => {
      const key = k.startsWith("--") ? `"${k}"` : k;
      return `${key}: "${v.replace(/"/g, '\\"')}"`;
    })
    .join(", ");
  return entries;
}

function convertStyleAttributes(html) {
  return html.replace(/style="([^"]*)"/g, (_, styleStr) => {
    const entries = convertInlineStyle(styleStr);
    return entries ? `style={{ ${entries} }}` : "style={{}}";
  });
}

function convertSvgAttributes(html) {
  const attrs = [
    "fill-rule",
    "clip-rule",
    "stroke-width",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-miterlimit",
    "font-family",
    "font-size",
    "font-weight",
    "text-anchor",
    "xlink:href",
    "xml:space",
    "view-box",
    "stop-color",
    "stop-opacity",
    "clip-path",
    "fill-opacity",
  ];
  for (const attr of attrs) {
    const re = new RegExp(`\\b${attr}=`, "g");
    html = html.replace(re, `${camelCaseProp(attr)}=`);
  }
  return html;
}

function selfCloseTags(html) {
  const voidTags = [
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
  ];
  for (const tag of voidTags) {
    const re = new RegExp(`<${tag}\\b([^>]*?)(?<!/)>`, "gi");
    html = html.replace(re, (match, attrs) => {
      if (match.endsWith("/>")) return match;
      return `<${tag}${attrs} />`;
    });
  }
  return html;
}

function htmlToJsx(html) {
  let jsx = html;

  // Move inline hero style block into CSS file
  const inlineStyle = jsx.match(/<style>([\s\S]*?)<\/style>/);
  if (inlineStyle) {
    const cssPath = path.join(root, "app", "schela.css");
    const css = fs.readFileSync(cssPath, "utf8");
    if (!css.includes("blinkBadge")) {
      fs.appendFileSync(cssPath, "\n\n" + inlineStyle[1].trim());
    }
    jsx = jsx.replace(/<style>[\s\S]*?<\/style>\s*/g, "");
  }

  jsx = jsx.replace(/<!--([\s\S]*?)-->/g, "{/*$1*/}");
  jsx = convertStyleAttributes(jsx);
  jsx = convertSvgAttributes(jsx);
  jsx = jsx.replace(/\bclass=/g, "className=");
  jsx = jsx.replace(/\bfor=/g, "htmlFor=");
  jsx = jsx.replace(/\bnovalidate\b/g, "noValidate");
  jsx = jsx.replace(/\bautocomplete=/g, "autoComplete=");
  jsx = jsx.replace(/\btabindex=/g, "tabIndex=");
  jsx = jsx.replace(/\breadonly\b/g, "readOnly");
  jsx = jsx.replace(/\bmaxlength=/g, "maxLength=");
  jsx = jsx.replace(/\bcrossorigin\b/g, "crossOrigin");
  jsx = jsx.replace(/\bcharset=/g, "charSet=");
  jsx = selfCloseTags(jsx);

  return jsx;
}

function createSchelaScripts() {
  const raw = fs.readFileSync(
    path.join(root, "app", "schela-scripts.raw.js"),
    "utf8"
  );

  const guarded = raw.replace(
    /const track = document\.getElementById\('marqueeTrack'\);\s*track\.innerHTML \+= track\.innerHTML;/,
    `const track = document.getElementById('marqueeTrack');
  if (track && !track.dataset.duplicated) {
    track.innerHTML += track.innerHTML;
    track.dataset.duplicated = 'true';
  }`
  );

  const initJs = `export default function initSchela() {
${guarded}
}
`;

  fs.writeFileSync(path.join(root, "components", "schela-init.js"), initJs);

  return `"use client";

import { useEffect } from "react";
import initSchela from "./schela-init";

export default function SchelaScripts() {
  useEffect(() => {
    initSchela();
  }, []);

  return null;
}
`;
}

const rawHtml = fs.readFileSync(
  path.join(root, "app", "schela-body.raw.html"),
  "utf8"
);
const jsxBody = htmlToJsx(rawHtml);

const pageTsx = `import SchelaScripts from "@/components/SchelaScripts";

export default function Home() {
  return (
    <>
      <SchelaScripts />
${jsxBody
  .split("\n")
  .map((line) => (line ? `      ${line}` : ""))
  .join("\n")}
    </>
  );
}
`;

fs.mkdirSync(path.join(root, "components"), { recursive: true });
fs.writeFileSync(path.join(root, "app", "page.tsx"), pageTsx);
fs.writeFileSync(
  path.join(root, "components", "SchelaScripts.tsx"),
  createSchelaScripts()
);

console.log("Wrote app/page.tsx and components/SchelaScripts.tsx");
