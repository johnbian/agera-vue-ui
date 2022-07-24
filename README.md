## lerna + workspace 使用
### 1. 初始化
```js
  lerna init
```
### 2. 开启workspace，修改package.json
```js
  "workspaces": ["packages/*"]
```
## yarn workspace 命令
### 安装根工作区（workspace root）的依赖
```js
  yarn add xxx -D -W // -D  -W 表示安装到工作区的根目录
```
### 给指定的工作区（包）安装单独的依赖
```
  yarn workspace button add xxxx
```
### 给所有工作区安装依赖
```
  yarn [install]
```
### 删除根工作区依赖
```
  yarn remove <pkg_name> -W
```
### 删除指定工作区依赖
```
  yarn workspace <workspace_name> remove <pkg_name>
```
### 执行指定工作区的 scripts 命令
```
  yarn workspace <workspace_name> run <script_name>
```
## 打包
### webpack
### rollup
## 发布
### 初始化
```
  lerna bootstrap
```
## 文档使用docsify
### 全局安装
```
  npm install docsify -g
```
### 初始化
```
  docsify init ./docs
```
### 运行
```
  docsify serve docs
```
## 单元测试
### Jest + codecov
### [![codecov](https://codecov.io/gh/johnbian/agera-vue-ui/branch/master/graph/badge.svg?token=P7MX5VWALU)](https://codecov.io/gh/johnbian/agera-vue-ui)


