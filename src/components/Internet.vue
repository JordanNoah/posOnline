<template>
    <div>
        <div v-if="this.statusConnection">
            <v-icon v-if="this.serverStatus" color="green">fas fa-wifi</v-icon>
            <v-icon v-else>fas fa-wifi</v-icon>
        </div>
        <v-icon v-else>mdi-wifi-off</v-icon>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data:()=>({
        statusConnection: window.navigator.onLine,
        serverStatus: false
    }),
    methods:{
        checkConnection(){
        }
    },
    mounted: function() {
		setInterval(()=>{
			this.statusConnection= window.navigator.onLine
		},1000)
        if(!this.statusConnection){
            setInterval(()=>{
            axios({
                method: 'get',
                url:this.$store.state.server+'/ping'
            }).then(()=>{
                this.serverStatus = true
            }).catch((err)=>{
                console.log(err.message)
                if(err.message=="Network Error"){
                    this.serverStatus = false
                }
            })
        },10000)
        }else{
            this.statusConnection = false
        }
    }
}
</script>