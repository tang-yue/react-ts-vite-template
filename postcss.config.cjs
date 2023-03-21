module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 75, // 换算基数
      unitPrecision: 3, // 允许rem单位增长到十进制数字，小数点后保留的位数
      propList: ['*'],
      exclude: /node_modules/i,
      mediaQuery: false,
      mediaQuery: false,  //（布尔值）允许在媒体查询中转换px。
      minPixelValue: 1 //设置要替换的最小像素值
    }
  }
}