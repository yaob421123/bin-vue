## Icon 图标
语义化的矢量图形，内置`uiw icons`图标属于UI框架常用图形字体。<a href="https://uiw-react.github.io/icons/" target="_blank">#uiw icons</a>

### 按需引入
```javascript
import Vue from 'vue';
import { Icon } from './components/icon';
import 'bin-vue/bindist/dist/icon/index.css';
Vue.component(Icon.name, Icon);
```

### 如何使用
指定图标对应的`icon`属性，示例代码：
```html
<b-icon type="circle-check" size="40" color="#ff0000" spin></b-icon>
```
示例如下:
:::demo Icon 图标

```html
<div style="margin-right: 10px; display: inline-block;">
  <b-icon type="loading" spin></b-icon>
</div>
<div style="margin-right: 10px; display: inline-block;">
  <b-icon type="minus" color="#ff0000"></b-icon>
</div>
<div style="margin-right: 10px; display: inline-block;">
  <b-icon type="plus" size="18" color="#ff0000"></b-icon>
</div>
```
:::

### 添加自己的图标字体方法
`icon` 名字需要命名规范，必须加上前缀 `.w-icon-图标名字`
```less
@font-face {
  font-family: "iconfont";
  src: url('iconfont.eot'); /* IE9*/
  src: url('iconfont.eot') format('embedded-opentype'), /* IE6-IE8 */
  url('iconfont.woff') format('woff'), /* chrome, firefox */
  url('iconfont.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('iconfont.svg') format('svg'); /* iOS 4.1- */
}

[class^="w-icon-uiw-"], [class*=" w-icon-uiw-"] {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.w-icon-uiw-wxbgongju:before { content: "\e61b"; }
.w-icon-uiw-wxbmingxingdianpu:before { content: "\e61c"; }
```

上面写好CSS之后在组件中引用，就可以通过 Icon 组件来调用了，例如上面定义了两个图标使用方法如下
```html
<b-icon type="uiw-wxbgongju" size="20" color="#ff0000"></b-icon>
<b-icon type="uiw-wxbmingxingdianp" size="20" color="#ff0000"></b-icon>
```
注意：这里 `.w-icon-` 是当前默认引用的字体文件，w-icon-uiw- 是引用自己制作的字体文件，来覆盖默认的字体文件，就当成一个新的作用域。

### Attributes
| 参数        | 说明                       | 类型         | 默认值   |
|-------------|--------------------------- |------------- |----------|
| type        | 图标的名称                 | string       | —        |
| size        | 字体大小单位px             | string / number| 18       |
| color       | 字体颜色                   | string       | #999     |
| spin        | 是否有旋转动画             | boolean      | false    |

### 实例
:::demo Icon 图标
```html
<template>
  <div>
    <div class="demo-tit">
      图标旋转实例
    </div>
    <b-grid column="6" :show-border="false">
      <b-grid-item :griditem-h="100" v-for="(item, index) in iconList" :key="index" style="padding:3px">
        <div class="demo-grid-box">
          <b-icon :type="item" size="16" spin></b-icon>
          <p>{{ item }}</p>
        </div>
      </b-grid-item>
    </b-grid>
    <div class="demo-tit">
      方向性图标
    </div>
    <b-grid column="6" :show-border="false">
      <b-grid-item :griditem-h="100" v-for="(item, index) in iconList2" :key="index" style="padding:3px">
        <div class="demo-grid-box">
          <b-icon :type="item" size="16"></b-icon>
          <p>{{ item }}</p>
        </div>
      </b-grid-item>
    </b-grid>
    <div class="demo-tit">
      提示建议性图标
    </div>
    <b-grid column="6" :show-border="false">
      <b-grid-item :griditem-h="100" v-for="(item, index) in iconList3" :key="index" style="padding:3px">
        <div class="demo-grid-box">
          <b-icon :type="item" size="16"></b-icon>
          <p>{{ item }}</p>
        </div>
      </b-grid-item>
    </b-grid>
    <div class="demo-tit">
      符号
    </div>
    <b-grid column="6" :show-border="false">
      <b-grid-item :griditem-h="100" v-for="(item, index) in iconList4" :key="index" style="padding:3px">
        <div class="demo-grid-box">
          <b-icon :type="item" size="16"></b-icon>
          <p>{{ item }}</p>
        </div>
      </b-grid-item>
    </b-grid>
    <div class="demo-tit">
      文件
    </div>
    <b-grid column="6" :show-border="false">
      <b-grid-item :griditem-h="100" v-for="(item, index) in iconList5" :key="index" style="padding:3px">
        <div class="demo-grid-box">
          <b-icon :type="item" size="16"></b-icon>
          <p>{{ item }}</p>
        </div>
      </b-grid-item>
    </b-grid>
    <div class="demo-tit">
      其它
    </div>
    <b-grid column="6" :show-border="false">
      <b-grid-item :griditem-h="100" v-for="(item, index) in iconList6" :key="index" style="padding:3px">
        <div class="demo-grid-box">
          <b-icon :type="item" size="16"></b-icon>
          <p>{{ item }}</p>
        </div>
      </b-grid-item>
    </b-grid>
    <div class="demo-tit">
      品牌标识
    </div>
    <b-grid column="6" :show-border="false">
      <b-grid-item :griditem-h="100" v-for="(item, index) in iconList7" :key="index" style="padding:3px">
        <div class="demo-grid-box">
          <b-icon :type="item" size="16"></b-icon>
          <p>{{ item }}</p>
        </div>
      </b-grid-item>
    </b-grid>
    <div class="demo-tit">
      浏览器图标
    </div>
    <b-grid column="6" :show-border="false">
      <b-grid-item :griditem-h="100" v-for="(item, index) in iconList8" :key="index" style="padding:3px">
        <div class="demo-grid-box">
          <b-icon :type="item" size="16"></b-icon>
          <p>{{ item }}</p>
        </div>
      </b-grid-item>
    </b-grid>
  </div>
</template>

<style lang="less">
.demo-tit {
  font-weight:bold;
  padding:5px 0;
}
.demo-grid-box {
  height: 100%;
  background: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
  p {
    margin-top: 10px;
  }
}
</style>
```
:::