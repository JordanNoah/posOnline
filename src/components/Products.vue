<template>
    <div>
        <v-virtual-scroll :bench="benched" :items="itemsRow" :height="height" item-height="300" width="100%">
            <template v-slot:default="{ item }">
                <v-container>
                    <v-row>
                        <v-col cols="3" v-for="i in item" :key="i.id" class="py-2">
                            <v-card height="285">
                                <v-img :src="i.image" height="60%" contain>
                                    <v-container class="d-flex justify-end pa-0">
                                        <span class="pa-1" style="background-color:rgba(255,255,255,0.5)">
                                            $ {{i.price}}
                                        </span>
                                    </v-container>
                                </v-img>
                                <v-container style="height:40%;padding-bottom:0px;">
                                    <div class="row" style="height:100%;">
                                    <div class="col-12 text-left" style="height:100%;overflow: hidden;text-overflow: ellipsis;">
                                        Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus.
                                        Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus.
                                        Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus.
                                    </div>
                                </div>
                                </v-container>
                            </v-card>
                        </v-col>
                    </v-row>
                    <!-- <v-row>
                    <v-col cols="3">
                        <v-card height="auto">
                            <v-img
              :src="item.image"
              height="auto"
              class="grey darken-4"
            ></v-img>
            {{item.id}}
                        </v-card>
                    </v-col>
                </v-row> -->
                </v-container>
            </template>
        </v-virtual-scroll>
    </div>
</template>
<script>
  export default {
    data: () => ({
      benched: 1,
      items:[],
      itemsRow:[]
    }),
    props: {
        height:null
    },
    computed: {
    //   items () {
    //     return Array.from({ length: this.length }, (k, v) => v + 1)
    //   },
    //   length () {
    //     return 7000
    //   },
    },
    async mounted () {
        this.items=await this.$store.state.db.collection('medicines').get();
    },
    watch: {
        items:function(val){
            var chunk = 4;
            for (var i = 0, j = val.length; i < j; i += chunk) {
                this.itemsRow.push(val.slice(i, i + chunk));
            }
        }
    }
  }
</script>