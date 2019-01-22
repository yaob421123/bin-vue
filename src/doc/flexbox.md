## Flexbox 布局
集合日常常用的布局，通过flex来简便地创建布局。

### 按需引入
```javascript
import Vue from 'vue';
import { Flexbox, FlexboxItem } from './components/flexbox';
import 'bin-vue/bindist/dist/flexbox/index.css';
Vue.component(Flexbox.name, Flexbox);
Vue.component(FlexboxItem.name, FlexboxItem);
```

### 常用的布局

:::demo 布局

```html
<b-flexbox align="middle" class="demo-row">
  <b-flexbox-item :span="1">
    <div class="demo-h bg-dark">:span="1"</div>
  </b-flexbox-item> 
</b-flexbox>
<b-flexbox align="middle" class="demo-row">
  <b-flexbox-item :span="1">
    <div class="demo-h bg-dark">:span="1"</div>
  </b-flexbox-item>
  <b-flexbox-item :span="1">
    <div class="demo-h bg-purple">:span="1"</div>
  </b-flexbox-item>
</b-flexbox>
<b-flexbox align="middle" class="demo-row">
  <b-flexbox-item :span="1">
    <div class="demo-h bg-dark">:span="1"</div>
  </b-flexbox-item>
  <b-flexbox-item :span="1">
    <div class="demo-h bg-purple">:span="1"</div>
  </b-flexbox-item>
   <b-flexbox-item :span="1">
    <div class="demo-h bg-dark">:span="1"</div>
  </b-flexbox-item>
</b-flexbox>
<b-flexbox align="middle" class="demo-row">
  <b-flexbox-item :span="2">
    <div class="demo-h bg-dark">:span="2"</div>
  </b-flexbox-item>
  <b-flexbox-item :span="1">
    <div class="demo-h bg-purple">:span="1"</div>
  </b-flexbox-item>
</b-flexbox>
<b-flexbox align="middle" gutter="10" class="demo-row bg-light">
  <b-flexbox-item :span="1">
    <div class="demo-h bg-dark">:span="1"</div>
  </b-flexbox-item>
  <div class="demo-h bg-purple demo-w100">width: 100px;</div>  
</b-flexbox>
<b-flexbox align="middle" iscolumn gutter="10" class="bg-light">
  <b-flexbox-item :span="1">
    <div class="demo-h bg-dark">:span="1"</div>
  </b-flexbox-item>
  <b-flexbox-item :span="1">
    <div class="demo-h bg-purple">:span="1"</div>
  </b-flexbox-item> 
</b-flexbox>
<style>
.demo-row {
  margin-bottom: 20px;
}
.bg-dark {
  background: #99a9bf;
  text-align:center;
}
.bg-purple {
  background: #d3dce6;
  text-align:center;
}
.bg-light {
  background: #e5e9f2;
}
.demo-w100 {
  width: 100px;
}
.demo-h {
  height: 40px;
  line-height:40px;
}
</style>
```
:::


### b-flexbox Attributes
| 参数        | 说明                       | 类型         | 可选值   | 默认值   |
|-------------|--------------------------- |------------- |----------|----------|
| gutter      | 栅格间隔          | String       | —        | —        |
| align       | flex 布局下的垂直排列方式  | string       | top / middle / bottom       | top      |
| justify     | flex 布局下的水平排列方式  | string       | start/end / center / space-around / space-between     | start    |
| iscolumn       | 垂直显示  | string       | —       | false      |

### b-flexbox-item Attributes
| 参数        | 说明                       | 类型         | 可选值   | 默认值   |
|-------------|--------------------------- |------------- |----------|----------|
| span      | 弹性盒模型对象的子元素都有相同的长度          | number       | 1 / 2 / 3       | 1        |
| space       | 栅格左侧右侧距离  | string       | —       | —      |
| space-left     | 栅格左侧距离，优先级低于space  | string       | —     | —    |
| space-right     | 栅格右侧距离，优先级低于space  | string       | —     | —    |

