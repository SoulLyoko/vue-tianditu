const { switch3, copyDocs, exec } = require("./utils");
const docsConfig = require("../docs/.vitepress/config");

switch3();
copyDocs();
console.log("Local: http://localhost:3000" + docsConfig.base);
exec("vitepress dev docs");
