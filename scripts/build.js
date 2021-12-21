const { switch3, exec } = require("./utils");

switch3();
exec("vue-tsc --noEmit");
exec("vite build");
