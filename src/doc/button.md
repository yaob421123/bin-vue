## Button 按钮

### 按需引入

```javascript
import Vue from 'vue';
import {Button} from 'bin-vue/bindist/dist/button';
Vue.component(Button.name, Button);
```

### 基础用法

:::demo 基础的按钮用法

```html
<div style="margin:10px 0">
  <b-button bgcolor="#04be02" size="mini" style="margin-right: 5px;">button</b-button>
  <b-button bgcolor="#ef4f4f" size="mini" style="margin-right: 5px;">button</b-button>
  <b-button bgcolor="#ffb400" size="mini" style="margin-right: 5px;">button</b-button>
  <b-button bgcolor="#04be02" size="mini" :isloadding="true">加载中...</b-button>
</div>
<div style="margin:10px 0">
  <b-button bgcolor="#04be02" size="small" style="margin-right: 5px;">button</b-button>
  <b-button bgcolor="#ef4f4f" size="small" style="margin-right: 5px;">button</b-button>
  <b-button bgcolor="#ffb400" size="small" style="margin-right: 5px;">button</b-button>
  <b-button bgcolor="#04be02" size="small" radio="angle" :isloadding="true">加载中...</b-button>
</div>
<div style="margin:10px 0">
  <b-button bgcolor="#04be02" size="small" radio="angle" style="margin-right: 5px;">button</b-button>
  <b-button bgcolor="#ef4f4f" size="small" radio="square" style="margin-right: 5px;">button</b-button>
  <b-button bgcolor="#ffb400" size="small" radio="circle">button</b-button>
</div>
<div style="margin:10px 0">
  <b-button bgcolor="#ef4f4f" size="large" radio="angle" block :isloadding="true">加载中...</b-button>
</div>
<div style="margin:10px 0">
  <b-button bgcolor="#ef4f4f" size="large" radio="angle" block disabled>禁用</b-button>
</div>
<div style="margin:10px 0">
  <b-button bgcolor="#ef4f4f" size="large" radio="angle" block isloading>radio="angle"</b-button>
</div>
<div style="margin:10px 0">
  <b-button bgcolor="#ef4f4f" size="large" radio="square" block>radio="square"</b-button>
</div>
<div style="margin:10px 0">
  <b-button bgcolor="#ef4f4f" size="large" radio="circle" :isloadding="true" block>radio="circle"</b-button>
</div>
```
:::


### Attributes
| 参数        | 说明                       | 类型         | 可选值                   | 默认值   |
|-------------|--------------------------- |------------- |--------------------------|----------|
| size        | 尺寸                       | string       |   mini / small / large   | small    |
| bgcolor     | 背景颜色                   | string       |  常规颜色值(必填)        | —        |
| color       | 按钮文字颜色               | string       |  常规颜色值              | #fff     |
| radio       | 圆形按钮(直角，R角，大圆角)| string       | square / circle / angle  | square   |
| block       | 是让为块级元素             | boolean      | —                        | false    |
| disabled    | 是否禁用状态               | boolean      | —                        | false    |
| isloadding  | 是否加载中                 | boolean      | —                        | false    |

### Event
| 参数      | 说明       |
|-----------|------------|
| iclick    | 点击事件   |
