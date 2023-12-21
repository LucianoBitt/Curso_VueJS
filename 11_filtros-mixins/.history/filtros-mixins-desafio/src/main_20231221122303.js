import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('contarPalavras', function(valor) {
    return valor.split(' ').map(p + )
})

new Vue({
    render: h => h(App),
}).$mount('#app')