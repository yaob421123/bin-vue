## Cell 表单
列表视图，H5上常用的内容结构，采用flex布局。

### 按需引入
```javascript
import Vue from 'vue';
import { CellGroup, Cell } from './components/cell';
import 'bin-vue/bindist/dist/cell/index.css';
Vue.component(CellGroup.name, CellGroup);
Vue.component(Cell.name, Cell);
```

### 常用的布局

:::demo 布局

```html
<template>
  <div class="box">
    <b-cell-group>
      <b-cell-item>
        <span slot="label">昵称</span>
        <span slot="content">张三</span>
      </b-cell-item>
      <b-cell-item>
        <span slot="label">联系电话</span>
        <span slot="content">18817437094</span>
      </b-cell-item>
      <b-cell-item>
        <span slot="label">联系地址</span>
        <span slot="content">上海市长宁区</span>
      </b-cell-item>

      <b-cell-item type="right">
        <span slot="label">昵称</span>
        <span slot="content">张三</span>
      </b-cell-item>
      <b-cell-item type="right">
        <span slot="label">联系电话</span>
        <span slot="content">18817437094</span>
      </b-cell-item>
      <b-cell-item type="right">
        <span slot="label">联系地址</span>
        <span slot="content">上海市长宁区</span>
      </b-cell-item>


      <b-cell-item ismore type="right">
        <span slot="label">昵称</span>
        <span slot="content">张三</span>
      </b-cell-item>
      <b-cell-item ismore type="right">
        <span slot="label">联系电话</span>
        <span slot="content">18888888888</span>
      </b-cell-item>
      <b-cell-item ismore type="right">
        <span slot="label">联系地址</span>
        <span slot="content">上海市长宁区</span>
      </b-cell-item>
    </b-cell-group>
  </div>
</template>

<style>
.box {
  width: 500px;
  border:1px solid #ececec;
  padding:0 10px;
}
</style>
```
:::

### 使用文本框，设置标题区域宽度
:::demo 布局

```html
<template>
  <div class="box">
    <b-cell-group>
      <b-cell-item labwidth="60px">
        <span slot="label">昵称</span>
        <span slot="content">
          <input type="text" placeholder="请输入昵称">
        </span>
      </b-cell-item>
      <b-cell-item ismore labwidth="60px">
        <span slot="label">昵称</span>
        <span slot="content">
          <input type="text" placeholder="请输入昵称">
        </span>
      </b-cell-item>
      <b-cell-item ismore type="right">
        <span slot="label">联系电话</span>
        <span slot="content">
          <input type="text" placeholder="请输入电话">
        </span>
      </b-cell-item>
    </b-cell-group>
  </div>
</template>

<style>
.box {
  width: 500px;
  border:1px solid #ececec;
  padding:0 10px;
}
</style>
```
:::

### 添加图标
:::demo 布局

```html
<template>
  <div class="box">
    <b-cell-group>
      <b-cell-item labcolor="#333" ismore>
        <b-icon slot="icon" type="ali-pay" size="20"></b-icon>
        <span slot=label>支付宝</span>
      </b-cell-item>
      <b-cell-item labcolor="#333" ismore>
        <b-icon slot="icon" type="weixin" size="20"></b-icon>
        <span slot="label">微信</span>
      </b-cell-item>
      <b-cell-item labcolor="#333" type="right" ismore>
        <b-icon slot="icon" type="taobao" size="20"></b-icon>
        <span slot="label">淘宝</span>
        <span slot="content">上海市长宁区</span>
      </b-cell-item>
    </b-cell-group>
  </div>
</template>

<style>
.box {
  width: 500px;
  border:1px solid #ececec;
  padding:0 10px;
}
</style>
```
:::

### b-cell-item Attributes
| 参数        | 说明                       | 类型         | 可选值   | 默认值   |
|-------------|--------------------------- |------------- |----------|----------|
| labcolor        | 标题颜色          | String && 常规颜色值       | -       | -        |
| labwidth       | 设置标题区域宽度  | String && px       | -       | -      |
| type     | 设置内容区域位置  | String       | left / right     | left    |
| ismore     | 是否显示右箭头  | Boolean       | -     | false    |

### b-cell-item Event
| 参数        | 说明                       |
|-------------|--------------------------- |
| iclick        | 点击事件          |