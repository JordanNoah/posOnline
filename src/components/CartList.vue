<template>
  <v-container fluid fill-height class="pa-0 d-flex align-start" style="overflow:none;">
    <v-card width="100%" elevation="0">
      <v-container fluid fill-height class="pa-0">
        <v-list subheader two-line width="100%" class="pa-0">
          <v-subheader class="d-flex justify-space-between">
            <div>
              <v-icon class="mr-2">
                fab fa-opencart
              </v-icon>
              Carrito de compra
            </div>
            <v-list-item-action v-if="cartItems.length>0">
              <v-fade-transition>
                <v-btn small depressed @click="cleanCart()">
                <v-icon class="mr-2" x-small>
                  fas fa-shopping-cart
                </v-icon>
                Empty cart
              </v-btn>
              </v-fade-transition>
            </v-list-item-action>
          </v-subheader>
          <v-divider></v-divider>
          <v-virtual-scroll :items="cartItems" height="300" item-height="64" id="cartItem" ref="cartItem">
            <template v-slot:default="{ item }">
              <cartItem :item="item" :quantity="item.quantity"/>
              <v-divider></v-divider>
            </template>
          </v-virtual-scroll>
        </v-list>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import cartItem from './CartItem'
  export default {
    data: () => ({
      autoScroll:true,
      index:0
    }),
    components: {
      cartItem
    },
    computed:{
      cartItems:function(){
        return this.$store.state.cartItems;
      },
    },
    watch:{
      cartItems:{
        handler:function(newObject){
          if(newObject.length > this.index || newObject.length == this.index){
            this.autoScroll=true
          }else if(newObject.length<this.index){
            this.autoScroll=false
          }
          this.index = newObject.length
        },
        deep:true
      }
    },
    updated:function(){
      if(this.autoScroll){
        const caritem = document.getElementById('cartItem')
        caritem.scrollTo(0,caritem.getElementsByClassName('v-virtual-scroll__container')[0].scrollHeight)
      }
    },
    methods: {
      cleanCart(){
        this.autoScroll=false
        this.$store.commit('cleanCart')
      }
    }
  }
</script>