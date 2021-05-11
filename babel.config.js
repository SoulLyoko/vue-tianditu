module.exports = {
  presets: [
    "@vue/cli-plugin-babel/preset",
    [
      "env",
      {
        modules: false,
        targets: {
          node: "current" // 根据当前节点版本进行编译
        }
      }
    ]
  ],
  env: {
    test: {
      presets: [["env", { targets: { node: "current" } }]],
      plugins: ["transform-require-context"]
    }
  }
};
