<script>
export default {
  data () {
    return  {
      iconList: ['loading', 'reload', 'picasa'],
      iconList2: [
        'caret-down', 'arrow-down','down-square-o','down-square',  'down-circle-o', 'down-circle',
        'caret-up','arrow-up', 'up-square-o', 'up-square','up-circle-o','up-circle', 'caret-left',
        'arrow-left','left-square-o','left-square',  'left-circle-o', 'left-circle', 'caret-right',
        'arrow-right','right-square-o', 'right-square','right-circle-o', 'right-circle', 'shrink',
        'arrows-alt','d-arrow-left','d-arrow-right','enter', 'rollback', 'd-caret','backward',
        'forward',  'logout', 'login',  'swap-right', 'swap', 'verticle-left', 'verticle-right',
        'play-circle-o',  'play-circle','menu-fold', 'menu-unfold'
      ],
      iconList3: [
        "plus", 'plus-circle-o','plus-circle', 'plus-square', 'plus-square-o', "question-circle-o", 
        "minus", 'minus-circle-o', 'minus-circle', 'minus-square', 'minus-square-o',"question-circle", 
        "close", "circle-close-o", "circle-close",'close-square', 'close-square-o', "asterisk", 
        "check", "circle-check-o", "circle-check",'check-square','check-square-o', "copyright",
      ],
      iconList4: [
        'file-text', 'file-jpg', 'file-unknown', 'file-add', 'file-excel', 'file-pdf',
        'folder-add', 'folder-open', 'paper-clip'
      ],
      iconList5: [
        'heart-off', 'heart-on', 'star-on', 'star-off','lock', 'unlock','dashboard',
        'area-chart', 'bar-chart', 'dot-chart','pie-chart', 
        'dislike-o', 'like-o','loading', 'reload','appstore', 'appstore-o',
        'tag', 'tag-o','tags','tags-o', 'setting','setting-o','map','table','qrcode','barcode','printer',
        'cloud-upload','cloud-upload-o', 'cloud-download','cloud-download-o', 'download','message','message-o',
        'user', 'usergroup-add', 'zoom-in', 'zoom-out','time', 'time-o',
        "bell", 'camera-o', 'coffee', 'document', 'delete', 'date', 'edit',  'eye-o', 'environment-o', 
        'filter', 'global', 'inbox', 'home', 'laptop', 'link',  'menu', 'mobile', 'more', 'notification', 
        'picture', 'picasa', 'pay-circle-o', 'pay', 'poweroff',  'save', 'safety', 'search', 'shopping-cart', 
        'share',   'upload', 'verification', 'video-camera', 'wifi'
      ],
      iconList6: [
        'uiw', 'windows', "linux", 'apple', 'facebook', 'twitter', 'adobe', "baidu", "ali-pay", 
        'android-o', 'android','reddit', 'github', 'github-o', "aliwangwang",   "dingding", 
        "foursquare", "linkedin", "pinterest", "qq",  "weibo", "taobao", "weixin", 'css3', 'html5'
      ],
      iconList7: [
        "chrome", "safari", "firefox", "opera", "ie"
      ]
    }
  }
}
</script>
<style lang="less">
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
注意：这里 `.w-icon-` 是当前默认引用的字体文件，`w-icon-uiw-` 是引用自己制作的字体文件，来覆盖默认的字体文件，就当成一个新的作用域。

### Attributes
| 参数        | 说明                       | 类型         | 默认值   |
|-------------|--------------------------- |------------- |----------|
| type        | 图标的名称                 | string       | —        |
| size        | 字体大小单位px             | string / number| 18px       |
| color       | 字体颜色                   | string       | #999     |
| spin        | 是否有旋转动画             | boolean      | false    |

### 图标旋转实例
:::demo Icon 图标
```html
<template>
  <div>
    <b-grid column="6" :show-border="false">
      <b-grid-item :griditem-h="100" v-for="(item, index) in iconList" :key="index" style="padding:3px">
        <div class="demo-grid-box">
          <b-icon :type="item" size="20" spin></b-icon>
          <p>{{ item }}</p>
        </div>
      </b-grid-item>
    </b-grid>
  </div>
</template>

<script>
export default {
  data () {
    return  {
      iconList: ['loading', 'reload', 'picasa']
    }
  }
}
</script>
```
:::

### 方向性图标
:::demo Icon 图标
```html
<template>
  <div>
    <b-grid column="6" :show-border="false">
      <b-grid-item :griditem-h="100" v-for="(item, index) in iconList2" :key="index" style="padding:3px">
        <div class="demo-grid-box">
          <b-icon :type="item" size="20"></b-icon>
          <p>{{ item }}</p>
        </div>
      </b-grid-item>
    </b-grid>
  </div>
</template>

<script>
export default {
  data () {
    return  {
      iconList2: [
        'caret-down', 'arrow-down','down-square-o','down-square',  'down-circle-o', 'down-circle',
        'caret-up','arrow-up', 'up-square-o', 'up-square','up-circle-o','up-circle', 'caret-left',
        'arrow-left','left-square-o','left-square',  'left-circle-o', 'left-circle', 'caret-right',
        'arrow-right','right-square-o', 'right-square','right-circle-o', 'right-circle', 'shrink',
        'arrows-alt','d-arrow-left','d-arrow-right','enter', 'rollback', 'd-caret','backward',
        'forward',  'logout', 'login',  'swap-right', 'swap', 'verticle-left', 'verticle-right',
        'play-circle-o',  'play-circle','menu-fold', 'menu-unfold'
      ]
    }
  }
}
</script>
```
:::

### 符号
:::demo Icon 图标
```html
<template>
  <div>
    <b-grid column="6" :show-border="false">
      <b-grid-item :griditem-h="100" v-for="(item, index) in iconList3" :key="index" style="padding:3px">
        <div class="demo-grid-box">
          <b-icon :type="item" size="20"></b-icon>
          <p>{{ item }}</p>
        </div>
      </b-grid-item>
    </b-grid>
  </div>
</template>

<script>
export default {
  data () {
    return  {
      iconList3: [
        "plus", 'plus-circle-o','plus-circle', 'plus-square', 'plus-square-o', "question-circle-o", 
        "minus", 'minus-circle-o', 'minus-circle', 'minus-square', 'minus-square-o',"question-circle", 
        "close", "circle-close-o", "circle-close",'close-square', 'close-square-o', "asterisk", 
        "check", "circle-check-o", "circle-check",'check-square','check-square-o', "copyright",
      ]
    }
  }
}
</script>
```
:::

### 文件
:::demo Icon 图标
```html
<template>
  <div>
    <b-grid column="6" :show-border="false">
      <b-grid-item :griditem-h="100" v-for="(item, index) in iconList4" :key="index" style="padding:3px">
        <div class="demo-grid-box">
          <b-icon :type="item" size="20"></b-icon>
          <p>{{ item }}</p>
        </div>
      </b-grid-item>
    </b-grid>
  </div>
</template>

<script>
export default {
  data () {
    return  {
      iconList4: [
        'file-text', 'file-jpg', 'file-unknown', 'file-add', 'file-excel', 'file-pdf',
        'folder-add', 'folder-open', 'paper-clip'
      ]
    }
  }
}
</script>
```
:::

### 其它
:::demo Icon 图标
```html
<template>
  <div>
    <b-grid column="6" :show-border="false">
      <b-grid-item :griditem-h="100" v-for="(item, index) in iconList5" :key="index" style="padding:3px">
        <div class="demo-grid-box">
          <b-icon :type="item" size="20"></b-icon>
          <p>{{ item }}</p>
        </div>
      </b-grid-item>
    </b-grid>
  </div>
</template>

<script>
export default {
  data () {
    return  {
      iconList5: [
        'heart-off', 'heart-on', 'star-on', 'star-off','lock', 'unlock','dashboard',
        'area-chart', 'bar-chart', 'dot-chart','pie-chart', 
        'dislike-o', 'like-o','loading', 'reload','appstore', 'appstore-o',
        'tag', 'tag-o','tags','tags-o', 'setting','setting-o','map','table','qrcode','barcode','printer',
        'cloud-upload','cloud-upload-o', 'cloud-download','cloud-download-o', 'download','message','message-o',
        'user', 'usergroup-add', 'zoom-in', 'zoom-out','time', 'time-o',
        "bell", 'camera-o', 'coffee', 'document', 'delete', 'date', 'edit',  'eye-o', 'environment-o', 
        'filter', 'global', 'inbox', 'home', 'laptop', 'link',  'menu', 'mobile', 'more', 'notification', 
        'picture', 'picasa', 'pay-circle-o', 'pay', 'poweroff',  'save', 'safety', 'search', 'shopping-cart', 
        'share',   'upload', 'verification', 'video-camera', 'wifi'
      ]
    }
  }
}
</script>
```
:::

### 品牌标识
:::demo Icon 图标
```html
<template>
  <div>
    <b-grid column="6" :show-border="false">
      <b-grid-item :griditem-h="100" v-for="(item, index) in iconList6" :key="index" style="padding:3px">
        <div class="demo-grid-box">
          <b-icon :type="item" size="20"></b-icon>
          <p>{{ item }}</p>
        </div>
      </b-grid-item>
    </b-grid>
  </div>
</template>

<script>
export default {
  data () {
    return  {
      iconList6: [
        'uiw', 'windows', "linux", 'apple', 'facebook', 'twitter', 'adobe', "baidu", "ali-pay", 
        'android-o', 'android','reddit', 'github', 'github-o', "aliwangwang",   "dingding", 
        "foursquare", "linkedin", "pinterest", "qq",  "weibo", "taobao", "weixin", 'css3', 'html5'
      ]
    }
  }
}
</script>
```
:::

### 浏览器图标
:::demo Icon 图标
```html
<template>
  <div>
    <b-grid column="6" :show-border="false">
      <b-grid-item :griditem-h="100" v-for="(item, index) in iconList7" :key="index" style="padding:3px">
        <div class="demo-grid-box">
          <b-icon :type="item" size="20"></b-icon>
          <p>{{ item }}</p>
        </div>
      </b-grid-item>
    </b-grid>
  </div>
</template>

<script>
export default {
  data () {
    return  {
      iconList7: [
        "chrome", "safari", "firefox", "opera", "ie"
      ]
    }
  }
}
</script>
```
:::