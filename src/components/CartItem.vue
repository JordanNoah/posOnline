<template>
    <v-list-item :key="item.id" :id="'cartItem'+item.id" transition="slide-x-reverse-transition">
        <v-list-item-avatar>
            <v-img :src="item.image" :lazy-src="item.image" aspect-ratio="1" class="grey lighten-2">
                <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                </template>
            </v-img>
        </v-list-item-avatar>

        <v-list-item-content>
            <v-list-item-title>
                <strong>{{ item.name }}</strong>
            </v-list-item-title>
            <v-list-item-subtitle>
                $ {{item.price.toFixed(2)}} <strong>x</strong> {{quantity}}
            </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
            <v-btn fab small depressed @click="removeItemCart(item.id)">
                <v-icon>
                    far fa-times-circle
                </v-icon>
            </v-btn>
        </v-list-item-action>
    </v-list-item>
</template>
<script>
export default {
    props: {
        title:String,
        quantity:Number,
        item:Object
    },
    methods:{
        removeItemCart(idItem){
            this.$store.commit('removeItemCart',idItem)
      },
    },
    updated: function(){
        // console.log(document.getElementById("cartItem"))
        console.log(this.item.id)
    }
}
</script>
<style scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>