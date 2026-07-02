const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

function walk(dir, out) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((e) => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else {
      const nfc = e.name.normalize("NFC");
      if (nfc !== e.name) out.push(p);
    }
  });
  return out;
}

const files = walk("public/assets", []);
files.forEach((f) => {
  const dir = path.dirname(f);
  const base = path.basename(f);
  const nfcBase = base.normalize("NFC");
  const dst = path.join(dir, nfcBase);
  console.log("RENAME:", f, "->", dst);
  execFileSync("git", ["mv", "--", f, dst]);
});
