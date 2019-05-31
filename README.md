# bin-vue

#### bin-vue 是基于Vue3.x的移动端&微信UI。

### 安装使用
```
npm install --save-dev bin-vue
```
### 全局安装
```
import Vue from 'vue';
import binvue from 'bin-vue';
import 'bin-vue/bindist/binui.css';
Vue.use(binvue);
```

### 按需引入
```
import Vue from 'vue';
import {Button} from 'bin-vue/bindist/dist/button';
import 'bin-vue/bindist/dist/button/index.css';
Vue.component(Button.name, Button);
```
### 已完成组件
- [x] Button 按钮
- [x] Icon 图标
- [x] Flexbox 布局
- [x] Grid 九宫格
- [x] Badge 角标
- [x] Cell 表单

### 参考、使用的项目

* <a href="https://github.com/ydcss/vue-ydui" target="_blank">[vue-ydui]</a>
* <a href="https://github.com/ElemeFE/element" target="_blank">[element]</a>
* <a href="https://github.com/kitorv/vue-ui-docs" target="_blank">[vue-ui-docs]</a>
* <a href="https://github.com/uiw-react/uiw" target="_blank">[uiw]</a>
