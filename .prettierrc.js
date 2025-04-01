// 执行下列两个命令，安装 eslint 和 prettier 工具
// npm add --dev prettier
// npm i -D eslint-plugin-prettier

module.exports = {
  eslintIntegration: true,
  singleQuote: true,
  semi: false,
  trailingComma: 'none',
  // 处理window和linux下换行符不一致问题
  endOfLine: 'auto'
}
