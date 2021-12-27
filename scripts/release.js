const fs = require("fs");
const execa = require("execa");
const { prompt } = require("enquirer");

async function main() {
  console.log("Choicing version...");
  const { release } = await prompt({
    type: "select",
    name: "release",
    message: "Select release type",
    choices: ["patch", "minor", "major", "custom"]
  });
  const pkg = JSON.parse(fs.readFileSync("package.json", "utf-8"));
  const [major, minor, patch] = pkg.version.split(".");
  switch (release) {
    case "patch":
      pkg.version = [major, minor, Number(patch) + 1].join(".");
      break;
    case "minor":
      pkg.version = [major, Number(minor) + 1, patch].join(".");
      break;
    case "major":
      pkg.version = [Number(major) + 1, minor, patch].join(".");
      break;
    default:
      {
        const { version } = await prompt({
          type: "input",
          name: "version",
          message: "Enter custom version"
        });
        pkg.version = version;
      }
      break;
  }

  console.log("Releasing v" + pkg.version + "...");
  fs.writeFileSync("package.json", JSON.stringify(pkg, null, 2) + "\n");

  console.log("Generating changelog...");
  await execa("npm", ["run", "changelog"]);

  console.log("Committing changes...");
  await execa("git", ["add", "package.json"]);
  await execa("git", ["add", "CHANGELOG.md"]);
  await execa("git", ["commit", "-m", `chore: release v${pkg.version}`]);
  await execa("git", ["tag", `v${pkg.version}`]);
}

main();
