const { switch3, exec } = require("./utils");

switch3();
exec("vue-tsc --noEmit && vite build");
