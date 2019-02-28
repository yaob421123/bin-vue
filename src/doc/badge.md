## Badge 角标
角标提供2种形状和5种状态颜色样式；支持自定义颜色。

### 按需引入
```javascript
import Vue from 'vue';
import { Badge } from './components/badge';
import 'bin-vue/bindist/dist/badge/index.css';
Vue.component(Badge.name, Badge);
```

### 常用的布局

:::demo 布局

```html
<template>
  <div class="mr5"><b-badge>1</b-badge></div>
  <div class="mr5"><b-badge bgcolor="#ef4f4f" color="#FFF">99</b-badge></div>
  <div class="mr5"><b-badge bgcolor="#04be02" color="#FFF">666666</b-badge></div>
  <div class="mr5"><b-badge bgcolor="#ef4f4f" color="#FFF" shape="square">666666</b-badge></div>
</template>

<style>
.mr5 {
  margin-right: 5px;
  display: inline-block;
}
</style>
```
:::


### Attributes
| 参数        | 说明                       | 类型         | 可选值   | 默认值   |
|-------------|--------------------------- |------------- |----------|----------|
| shape        | 角标形状（圆形和方形）          | String       | circle / square        | circle        |
| color       | 角标字体颜色  | String && 常规颜色值       | -       | -      |
| bgcolor     | 角标背景色  | String && 常规颜色值       | -     | -    |

