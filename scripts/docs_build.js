const { switch3, copyDocs, exec } = require("./utils");

switch3();
copyDocs();
exec("vitepress build docs");
