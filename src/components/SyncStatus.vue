<template>
    <div>
        <v-icon v-if="this.statusSync">fas fa-sync-alt fa-spin</v-icon>
        <v-icon v-else>fas fa-sync-alt</v-icon>
    </div>
</template>
<script>
// import axios from 'axios'
export default {
    // data:()=>({
    //     statusSync:true
    // }),
    mounted(){
    },
    computed:{
        statusSync:function(){
        return this.$store.state.syncStatus;
        }
    }
}
</script>