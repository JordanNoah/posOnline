import Vue from 'vue'
import Vuex from 'vuex'
import Localbase from 'localbase'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    db: new Localbase('db'),
    numberOfAction:0,
    dialogSync:false,
    server:'http://192.168.100.10:3000',
    medicinesSaved:0,
    totalMedicines:0
  },
  mutations: {
    openDialogSync(state){
      state.dialogSync = true
    },
    closeDialogSync(state){
      state.dialogSync = false
    }
  },
  actions: {
  },
  modules: {
  }
})
