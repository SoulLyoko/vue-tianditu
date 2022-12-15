import { execSync } from "child_process";

import fs from "fs-extra";

const { version } = fs.readJSONSync("package.json");
console.log("Releasing v" + version + "...");

console.log("Generating changelog...");
execSync("yarn changelog");

console.log("Committing changes...");
execSync("git add .");
execSync(`git commit -m "chore: release v${version}"`);
execSync(`git tag v${version} -m "v${version}"`);
