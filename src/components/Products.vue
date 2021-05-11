<template>    
    <v-container>
        <v-row>
            <v-col v-for="a in 13" cols="3" :key="a">
            <v-card>
                <v-img src="https://picsum.photos/500/300?image=15"
                lazy-src="https://picsum.photos/500/300?image=15" height="200"
                class="white--text grey darken-4">
                <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                </template>
                <v-container fluid fill-height class="ma-0 pa-0 d-flex align-end flex-column">
                    <v-card class="mb-auto pa-2 text-lg-right font-weight-medium" tile elevation="0"
                    color="rgba(255, 255, 255, 0.50)">
                    $ 13.50
                    </v-card>
                </v-container>
                </v-img>
                <v-card-title class="body-1 pa-3 font-weight-medium">
                Flex item 2
                </v-card-title>
            </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    mounted(){
    }
}
</script>