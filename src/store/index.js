import Vue from 'vue'
import Vuex from 'vuex'
import count from '@/store/modules/count'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    count
  },
  state:{
    number:1
  },
  mutations:{
    accountCount(state){
      state.number++
      console.log(state.number)
    }
  }
})