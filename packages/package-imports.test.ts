import { existsSync, readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vite-plus/test";

const packageDirectories = ["types", "core", "components", "vue-tianditu"] as const;
const packagesDirectory = resolve(process.cwd(), "packages");
const hasBuiltPackages = packageDirectories.every((directory) =>
  existsSync(resolve(packagesDirectory, directory, "dist/index.js")),
);

describe.skipIf(!hasBuiltPackages)("built package artifacts", () => {
  it.each(packageDirectories)("imports %s", async (directory) => {
    const entry = resolve(packagesDirectory, directory, "dist/index.js");
    await expect(import(/* @vite-ignore */ entry)).resolves.toBeTypeOf("object");
  });

  it.each(["components", "vue-tianditu"])("exports CSS from %s", (directory) => {
    const packageJson = JSON.parse(
      readFileSync(resolve(packagesDirectory, directory, "package.json"), "utf8"),
    );
    expect(packageJson.exports["./style.css"]).toBe("./dist/style.css");
    expect(existsSync(resolve(packagesDirectory, directory, "dist/style.css"))).toBe(true);
  });

  it("does not contain legacy runtime or tooling references", () => {
    const artifactText = packageDirectories
      .flatMap((directory) =>
        readdirSync(resolve(packagesDirectory, directory, "dist"))
          .filter((file) => /\.(?:css|d\.ts|js)$/.test(file))
          .map((file) => readFileSync(resolve(packagesDirectory, directory, "dist", file), "utf8")),
      )
      .join("\n");

    expect(artifactText).not.toMatch(
      /vue-demi|@vue\/composition-api|eslint|prettier|husky|lint-staged|workspace:/,
    );
  });
});
