import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('inverter', function(valor) {
        return valor.split('').reverse().join('')
        function name(params) {

        })
}

new Vue({
    render: h => h(App)
}).$mount('#app')