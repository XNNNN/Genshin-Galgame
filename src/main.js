import Vue from 'vue'
import App from './App.vue'
import router from  './router/index'
import { Slider } from 'element-ui';
import ECharts from 'vue-echarts'
import { use } from 'echarts/core';

export * from 'echarts/core';

import { CanvasRenderer } from 'echarts/renderers';

import { GraphChart } from 'echarts/charts';

use([GraphChart, CanvasRenderer])
Vue.config.productionTip = false
Vue.component('v-chart', ECharts)
Vue.use(Slider)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
