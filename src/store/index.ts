import Vue from 'vue'
import Vuex from 'vuex'
import genes from './modules/genes'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    genes
  },
  strict: debug
})
