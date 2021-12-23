const packageJson = require("../package.json");
const { exec: p_exec, execSync } = require("child_process");

/**
 * @returns "2"|"3"
 */
function getVueVersion() {
  const vue = packageJson.devDependencies.vue;
  const version = vue.match(/\d{1,}/)?.[0];
  return version;
}

function switch2() {
  if (getVueVersion() != "2") {
    execSync("yarn add vue");
    execSync("vue-demi-switch 2");
  }
}

function switch3() {
  if (getVueVersion() != "3") {
    execSync("yarn add vue@next");
    execSync("vue-demi-switch 3");
  }
}

function exec(command, cb) {
  if (cb) {
    const callback = (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    };
    p_exec(command, typeof cb === "function" ? cb : callback);
  } else {
    return execSync(command);
  }
}

function copyDocs({ readme = true, changelog = true } = {}) {
  readme && execSync("ncp README.md docs/index.md");
  changelog && execSync("ncp CHANGELOG.md docs/CHANGELOG.md");
}

module.exports.getVueVersion = getVueVersion;
module.exports.switch2 = switch2;
module.exports.switch3 = switch3;
module.exports.copyDocs = copyDocs;
module.exports.exec = exec;
