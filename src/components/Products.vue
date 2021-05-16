<template>
  <div>
      <v-virtual-scroll
        :bench="benched"
        :items="itemsRow"
        :height="height"
        item-height="300"
        width="100%"
      >
        <template v-slot:default="{ item }">
            <v-container>
                <v-row>
                    <v-col cols="3" v-for="i in item" :key="i.id" class="py-2">
                        <v-card height="285">
                            <v-img :src="i.image"></v-img>
                            <v-card-title class="body-1 pa-3 font-weight-medium text-truncate d-inline-block" style="max-width:100%">
                    {{i.name}}
                </v-card-title>
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