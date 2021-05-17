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
    syncStatus:false,
    ///cart
    cartItems:[]
    ///
  },
  mutations: {
    openDialogSync(state){
      state.dialogSync = true
    },
    closeDialogSync(state){
      state.dialogSync = false
    },
    addItemToCart(state,item){
      var objectItem = null;
      var index = state.cartItems.findIndex(x => x.id == item.id)
      if (index > -1) {
        objectItem = state.cartItems[index]
        objectItem.quantity += 1
        state.cartItems.splice(index,1,objectItem);
      } else {
        objectItem = item
        objectItem.quantity = 1
        state.cartItems.push(objectItem);
      }
    },
    removeItemCart(state,idItem){
      var index = state.cartItems.findIndex(x => x.id == idItem)
      if(index > -1){
        state.cartItems.splice(index,1)
      }
    },
    cleanCart(state){
      state.cartItems = [];
    }
  },
  actions: {
  },
  modules: {
  }
})
