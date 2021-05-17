<template>
    <div>
        <v-virtual-scroll :items="itemsRow" :height="height" item-height="300" width="100%">
            <template v-slot:default="{ item }">
                <v-container>
                    <v-row>
                        <v-col cols="3" v-for="i in item" :key="i.id" class="py-2">
                            <v-card height="285">
                                <v-img :src="i.image" height="60%" contain>
                                    <template v-slot:placeholder>
                                        <v-row class="fill-height ma-0" align="center" justify="center">
                                            <v-progress-circular indeterminate color="grey lighten-5">
                                            </v-progress-circular>
                                        </v-row>
                                    </template>
                                    <v-container class="d-flex justify-end pa-0">
                                        <span class="py-1 px-2 white--text" style="background-color:rgba(0,0,0,0.4)">
                                            $ {{i.price.toFixed(2)}}
                                        </span>
                                    </v-container>
                                </v-img>
                                <v-container style="height:40%;padding-bottom:0px;">
                                    <div class="row" style="height:100%;">
                                        <div class="col-12 text-left"
                                            style="height:100%;overflow: hidden;text-overflow: ellipsis;">
                                            {{i.name}}
                                        </div>
                                    </div>
                                </v-container>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </template>
        </v-virtual-scroll>
    </div>
</template>
<script>
  export default {
    data: () => ({
      benched: 0,
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