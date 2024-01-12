import '@babel/polyfill'
import Vue from 'vue'

import '@/plugins/bootstrap-vue'
import '@/plugins/axios'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')