import Vue from 'vue'
import Vuex from 'vuex'

import carrinho from './modules/carrinho'
import parametros from './modules/parametros'

import from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        nome: 'Luciano',
        sobrenome: 'Bittencourt',
    },
    modules: { carrinho, parametros }
})