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
Vue.use(binvue);
```

### 按需引入
```
import Vue from 'vue';
import {Button} from 'bin-vue/bindist/dist/button';
Vue.component(Button.name, Button);
```

### 参考、使用的项目

* <a href="https://github.com/ydcss/vue-ydui" target="_blank">[vue-ydui]</a>
* <a href="https://github.com/ElemeFE/element" target="_blank">[element]</a>
* <a href="https://github.com/kitorv/vue-ui-docs" target="_blank">[vue-ui-docs]</a>
* <a href="https://github.com/uiw-react/uiw" target="_blank">[uiw]</a>
