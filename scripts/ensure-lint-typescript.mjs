import { execFileSync } from "node:child_process";
import {
  cpSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const TS_VERSION = "6.0.3";
const root = fileURLToPath(new URL("..", import.meta.url));

const PARENTS = [
  join(
    root,
    "node_modules",
    "eslint-config-next",
    "node_modules",
    "typescript-eslint"
  ),
  join(root, "node_modules", "ts-api-utils"),
];

function targetFor(parent) {
  return join(parent, "node_modules", "typescript");
}

function nestedTsVersion(targetDir) {
  try {
    const pkg = JSON.parse(
      readFileSync(join(targetDir, "package.json"), "utf8")
    );
    return typeof pkg.version === "string" ? pkg.version : null;
  } catch {
    return null;
  }
}

async function main() {
  const targets = [];
  for (const parent of PARENTS) {
    if (!existsSync(join(parent, "package.json"))) continue;
    const targetDir = targetFor(parent);
    const version = nestedTsVersion(targetDir);
    if (version && !version.startsWith("7.")) {
      console.log(
        `[ensure-lint-typescript] typescript@${version} already present at ${targetDir}, skipping.`
      );
      continue;
    }
    targets.push(targetDir);
  }
  if (targets.length === 0) return;

  console.log(
    `[ensure-lint-typescript] installing typescript@${TS_VERSION} for the ESLint toolchain...`
  );
  const work = mkdtempSync(join(tmpdir(), "ts-lint-"));
  try {
    const registry = (
      process.env.npm_config_registry || "https://registry.npmjs.org/"
    ).replace(/\/+$/, "");
    const url = `${registry}/typescript/-/typescript-${TS_VERSION}.tgz`;
    console.log(`[ensure-lint-typescript] downloading ${url}`);
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`download failed: ${res.status} ${res.statusText}`);
    }
    const tarball = join(work, `typescript-${TS_VERSION}.tgz`);
    writeFileSync(tarball, Buffer.from(await res.arrayBuffer()));
    for (const targetDir of targets) {
      const extracted = join(work, "package");
      rmSync(extracted, { recursive: true, force: true });
      execFileSync("tar", ["-xzf", tarball, "-C", work], { stdio: "inherit" });
      rmSync(targetDir, { recursive: true, force: true });
      mkdirSync(dirname(targetDir), { recursive: true });
      cpSync(extracted, targetDir, { recursive: true });
      console.log(
        `[ensure-lint-typescript] installed typescript@${TS_VERSION} at ${targetDir}`
      );
    }
  } finally {
    rmSync(work, { recursive: true, force: true });
  }
}

main().catch((err) => {
  console.error("[ensure-lint-typescript]", err);
  process.exit(1);
});
