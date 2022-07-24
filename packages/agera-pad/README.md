# agera-pad

## 安装
```
yarn add agera-pad -D
```

## 使用（按需加载）
### 方式一
```js
import AgeraPadBtn from 'agera-pad/lib/agera-pad-btn';
import 'agera-pad/lib/agera-pad-btn/index.css';
```
### 方式二 利用babel-plugin-import
```js
  import { AgeraPadBtn } from 'agera-pad';

  // babel.config.js
  [
    "import",
    {
      "libraryName": "agera-pad",
      "libraryDirectory": "lib",
      style: (name, file) => {
        return `${name}/index.css`
      }
    }
  ],
```
