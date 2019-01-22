## 快速上手

### 安装

```javascript
npm install bin-vue --save
```

### 全局配置

```javascript
import Vue from 'vue';
import binvue from 'bin-vue';
Vue.use(binvue);
```

### 按需引入

```javascript
import Vue from 'vue';
import {Button} from 'bin-vue/bindist/dist/button';
Vue.component(Button.name, Button);
```