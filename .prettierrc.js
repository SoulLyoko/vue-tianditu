module.exports = {
  arrowParens: "avoid", //当箭头函数仅有一个参数时加上括号
  bracketSpacing: true, //控制对象字面量的空格输出
  embeddedLanguageFormatting: "auto", //控制Prettier格式是否引用文件中嵌入的代码。
  enable: true, //是否启用prettier
  enableDebugLogs: true, //是否启用调试日志
  endOfLine: "auto", //指定 prettier 的换行符
  htmlWhitespaceSensitivity: "css", //指定HTML文件的全局空白区域敏感度。 有效选项： 'css' - 尊重CSS显示属性的默认值。 'strict' - 空格被认为是敏感的。 'ignore' - 空格被认为是不敏感的。
  jsxBracketSameLine: false, //如果为true，将 > 多行 JSX 元素放在最后一行的末尾，而不是单独放在下一行
  jsxSingleQuote: false, //在jsx中使用单引号而不是双引号
  printWidth: 120, //指定每行代码的最佳长度， 如果超出长度则换行。
  proseWrap: "preserve", //（Markdown）将散文包含在多行中
  quoteProps: "as-needed", //对象属性的引号
  semi: true, //是否在每行末尾添加分号
  singleQuote: false, //如果为true，将使用单引号而不是双引号
  tabWidth: 2, //每个制表符占用的空格数
  trailingComma: "none", //尽可能控制尾随逗号的输出。 有效选项： '无' - 无尾随逗号 ' es5' - 在ES5中有效的尾随逗号（对象，数组等） 'all' - 尾随逗号 尽可能（函数参数）
  useTabs: false, //使用制表符（tab）缩进
  vueIndentScriptAndStyle: false, //是否缩进vue文件的<script>和<style>标签中的代码
  withNodeModules: false //是否处理在node_modules中的文件
};
