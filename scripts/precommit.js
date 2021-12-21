const { switch3, copyDocs, exec } = require("./utils");

switch3();
copyDocs();
exec("git add docs/index.md");
exec("git add docs/CHANGELOG.md");
