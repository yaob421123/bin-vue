## Grid 九宫格

### 按需引入
```javascript
import Vue from 'vue';
import { Grid, GridItem } from './components/grid';
import 'bin-vue/bindist/dist/grid/index.css';
Vue.component(Grid.name, Grid);
Vue.component(GridItem.name, GridItem);
```

### 代码实例
::: demo 九宫格
```html
<template>
  <b-grid column="4" :show-border="true" v-if="girdList.length > 0">
    <b-grid-item :griditem-h="100" v-for="(item, index) in girdList" :key="index" class="demo-grid">
     {{ item }}
    </b-grid-item>
  </b-grid>
</template>
<script>
export default {
  data () {
    return {
      girdList: ['girst', 'girst', 'girst', 'girst', 'girst', 'girst']
    }
  }
}
</script>
<style>
.demo-grid {
  display: flex;
  align-items:center;
  justify-content:center;
}
</style>
```
:::

### b-grid Attributes
| 参数        | 说明                       | 类型         | 默认值   |
|-------------|--------------------------- |------------- |----------|
| column        | 每行显示列数，最多10列                | numbert / string       | 4       |
| show-border       | 是否显示边框                   | boolean       | true     |

### b-grid-item Attributes
| 参数        | 说明                       | 类型         | 默认值   |
|-------------|--------------------------- |------------- |----------|
| griditem-h        | 格子高度                | numbert / string       | 100       |