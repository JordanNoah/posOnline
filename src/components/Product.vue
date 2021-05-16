<template>
    <div>
        <v-img :src="'data:;base64,'+source.image" max-height="150"
  max-width="250" ></v-img>
        <!-- {{source.image}} -->
    </div>
</template>
<!-- <v-col v-for="i in medicines" cols="3" :key="i.idMedicine">
            <v-card>
                <v-img :src="i.image"
                :lazy-src="i.image" height="200"
                class="white--text grey darken-4">
                <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                </template>
                <v-container fluid fill-height class="ma-0 pa-0 d-flex align-end flex-column">
                    <v-card class="mb-auto pa-2 text-lg-right font-weight-medium" tile elevation="0"
                    color="rgba(255, 255, 255, 0.50)">
                    $ {{i.price}}
                    </v-card>
                </v-container>
                </v-img>
                <v-card-title class="body-1 pa-3 font-weight-medium">
                    {{i.name}}
                </v-card-title>
            </v-card>
            </v-col> -->
<script>
export default {
    props: {
        index:{
            type:Number
        },
        source:{
            type:Object,
            default(){
                return {};
            }
        }
    }
}
</script>