# react-ts-vite-template
### react + ts + redux  移动端搭建
vite 官网选择 typescript + react
#### router部分
`npm install react-router react-router-dom --save`
`npm install @types/react-router @types/react-router-dom --dev`
#### css预处理部分
`npm install sass --save`
#### redux部分
`npm install redux react-redux --save`
[使用参考](https://juejin.cn/post/6844903792543006733)
// 通过 connect 方式进行连接
#### axios部分
`npm install axios --save`
`npm install @types/axios --dev`
[axios封装参考](https://juejin.cn/post/7154991998989959181)
#### 移动端自适应配置
`npm install amfe-flexible postcss-pxtorem --save`
// amfe-flexable 是阿里发布的一套可伸缩适配方法
// 也可用 lib-flexible + postcss-pxtorem 方式解决移动端适配
[参考](https://juejin.cn/post/7186236863714164793)
#### 第三方组件库 ant-mobile
`npm install vite-plugin-imp -D 重要插件`
`npm install antd-mobile --save`
[参考](https://blog.csdn.net/weixin_48213294/article/details/126294090)
#### vite config 配置
1、配置 antd-mobile
2、配置 别名 （注意tsconfig.json的paths配置统一，并项目要在vscode的工作区间避免报错）
#### eslint 配置
`npm install @typescript-eslint/eslint-plugin @typescript-eslint/parser -D`
`npm install eslint eslint-plugin-react eslint-plugin-react-hooks -D`
- @typescript-eslint/parser: eslint 解析器，解析typescript，从来用来检查和规范typescript代码
- @typescript-eslint/eslint-plugin: eslint插件，包含各类定义好的检测typescript代码的规范'
#### commit 配置
`npm install husky lint-staged -D`
`npm install @commitlint/cli @commitlint/config-conventional -D`
配置 commitlint.config.js 文件
