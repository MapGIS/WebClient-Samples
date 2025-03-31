import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'element-ui/lib/theme-chalk/index.css';
import './styles/index.css'
import './styles/global.css'
import ElementUI from 'element-ui';
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.less';

import IconFont from './config/components/IconFont/iconfont'
import VueLazyload from 'vue-lazyload'

import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
Vue.component('v-chart', ECharts)

Vue.use(ElementUI);
// Vue.use(Antd);
Vue.use(VueLazyload);

Vue.component('IconFont', IconFont)

Vue.config.productionTip = false

import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

import Prism from 'prismjs';

VMdPreview.use(vuepressTheme, {
  Prism
});

Vue.use(VMdPreview);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
