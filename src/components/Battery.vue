<template>
    <div>
        <div v-if="this.batteryCharging">
            <v-icon v-if="this.chargePercent == 10">mdi-battery-charging-10 mdi-rotate-90</v-icon>
            <v-icon v-else-if="this.chargePercent == 20">mdi-battery-charging-20 mdi-rotate-90</v-icon>
            <v-icon v-else-if="this.chargePercent == 30">mdi-battery-charging-30 mdi-rotate-90</v-icon>
            <v-icon v-else-if="this.chargePercent == 40">mdi-battery-charging-40 mdi-rotate-90</v-icon>
            <v-icon v-else-if="this.chargePercent == 50">mdi-battery-charging-50 mdi-rotate-90</v-icon>
            <v-icon v-else-if="this.chargePercent == 60">mdi-battery-charging-60 mdi-rotate-90</v-icon>
            <v-icon v-else-if="this.chargePercent == 70">mdi-battery-charging-70 mdi-rotate-90</v-icon>
            <v-icon v-else-if="this.chargePercent == 80">mdi-battery-charging-80 mdi-rotate-90</v-icon>
            <v-icon v-else-if="this.chargePercent == 90">mdi-battery-charging-90 mdi-rotate-90</v-icon>
            <v-icon v-else-if="this.chargePercent == 100">mdi-battery-charging-100 mdi-rotate-90</v-icon>
        </div>
        <div v-else>
            <v-icon v-if="this.chargePercent<=20">fas fa-battery-empty</v-icon>
            <v-icon v-else-if="this.chargePercent>20 && this.chargePercent<=40">fas fa-battery-quarter</v-icon>
            <v-icon v-else-if="this.chargePercent>40 && this.chargePercent<=60">fas fa-battery-half</v-icon>
            <v-icon v-else-if="this.chargePercent>60 && this.chargePercent<=80">fas fa-battery-three-quarters</v-icon>
            <v-icon v-else>fas fa-battery-full</v-icon>
        </div>
    </div>
</template>
<script>
const browserBattery = require('browser-battery');
export default {
    data:()=>({
        batteryCharging:null,
        chargePercent:10
    }),
    mounted:function () {
        setInterval(() => {
            browserBattery().then(battery => {
                this.batteryCharging = battery.charging
                if (!this.batteryCharging) {
                    this.chargePercent = battery.level * 100
                }
            })
        },1000)
    },
    watch: {
        batteryCharging:function(newVar){
            if(newVar){
                this.chargePercent = 10
                setInterval(()=>{
                    if(this.chargePercent != 100){
                        this.chargePercent = this.chargePercent + 10
                    }else{
                        this.chargePercent = 10
                    }
                },700)
            }else{
                this.chargePercent=10
            }
        }
    }
}
</script>