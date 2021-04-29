<template>
    <div>
        <v-icon v-if="this.statusConnection" color="green">fas fa-wifi</v-icon>
        <v-icon v-else>mdi-wifi-off</v-icon>
    </div>
</template>
<script>
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
    }
}
</script>