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
            <v-list-item-action>
              <v-btn small depressed>
                <v-icon class="mr-2" x-small>
                  fas fa-shopping-cart
                </v-icon>
                Empty cart
              </v-btn>
            </v-list-item-action>
          </v-subheader>
          <v-divider></v-divider>
          <v-virtual-scroll :items="items" height="300" item-height="64">
            <template v-slot:default="{ item }">
              <v-list-item :key="item.id">
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
                    $ {{item.price.toFixed(2)}}
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-btn fab small depressed>
                    <v-icon>
                      far fa-times-circle
                    </v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>

              <v-divider></v-divider>
            </template>
          </v-virtual-scroll>
        </v-list>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      items:[]
    }),
    async mounted(){
      this.items=await this.$store.state.db.collection('medicines').get();
    }
  }
</script>