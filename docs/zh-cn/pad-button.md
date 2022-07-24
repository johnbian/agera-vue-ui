### 使用
```js
  import { AgeraPadBtn } from 'agera-pad';

  app.component('AgeraPadBtn', AgeraPadBtn);
```
```vue
<template>
  <AgeraPadBtn title="test-model-success" />
</template>
```

## 说明

## 按钮参数
| 参数   | 说明   | 类型    | 可选值 | 默认值   |
| ---   | ---- | ------- | ------- | ------ |
| mode  | 环境 | string | sit uat prod | - |
| type  | 新旧接口 | string | new, new_v2 | old |
| agentId  | 营销员id | string | - | 当type为old时候必传 |
| openId  | 营销员openid | string | - | - |
| agentCode  | 营销员code | string | - | - |
| compamyCode  | 营销员公司code | string | - | - |
| elem  | 指定监听dom | document | - | document |
| scrollCallBack  |  | function | 滚动回调 | e |
| success  | 成功回调 | function | 回调参数为营销人员信息 | - |
| err  | 失败回调 | function | - | - |


## QBusinessCard 方法

| 参数   | 说明   | 类型    | 入参 | 默认值   |
| ---   | ---- | ------- | ------- | ------ |
| createCardElement  | 创建卡片 | function | 营销员信息 | - |
| remove  | 删除卡片 | function | - | - |
| onscroll  | 滚动响应展示卡片 | function | - | - |
| bottom  | 卡片的位置 | number | - | - |
| height  | 卡片的高度 | number | - | - |