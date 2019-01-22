import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'highlight.js/styles/color-brewer.css'
import DemoBlock from './components/demo-block.vue'

const pkg = require('../package.json');

import binUi from '../packages/index.js';
Vue.use(binUi);

Vue.config.productionTip = false
Vue.component("demo-block", DemoBlock);

Vue.prototype.version = pkg.version;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
