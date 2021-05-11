<template>
  <div>
    <v-card tile>
      <v-card-title class="d-flex justify-center headline grey lighten-4">
        <span v-if="!this.sync && this.percentMedicine == 0 && this.percentClientes == 0">
          ¿Que desea sincronizar?
        </span>
        <span v-else-if="!this.sync && this.percentMedicine == 100 && this.percentClientes == 100">
          Sincronizado
        </span>
        <span v-else>
          Sincronizando
          <span class="one">.</span>
          <span class="two">.</span>
          <span class="three">.</span>
        </span>
      </v-card-title>
      {{this.sync}}
      {{this.percentMedicine}}
      {{this.percentClientes}}
    </v-card>
    <v-card tile>
      <v-container v-if="!this.sync && this.percentMedicine < 100 && this.percentClientes < 100">
        <v-sheet class="pa-5">
          <v-switch v-model="whatSync" inset label="Medicinas" value="Medicinas"></v-switch>
          <v-switch v-model="whatSync" inset label="Clientes" value="Clientes"></v-switch>
        </v-sheet>
      </v-container>
      <v-container v-else>
        <v-row class="d-flex align-center">
          <v-col cols="8">
            <p class="d-flex">
              <span class="mx-2 text-h6">
                Medicinas
              </span>
              <v-progress-circular :rotate="360" :size="30" :width="3" :value="this.percentMedicine" color="teal"
                class="text-button" style="font-size: 0.50rem !important;font-weight: 900;"
                v-if="((this.addsMedicines/this.totalMedicines)*100).toFixed(0) < 100">
                {{ this.percentMedicine === 'NaN' ? 0 : this.percentMedicine}}%
              </v-progress-circular>
              <v-icon color="green" v-else>
                far fa-check-circle
              </v-icon>
            </p>
            <p class="d-flex">
              <span class="mx-2 text-h6">
                Clientes
              </span>
              <v-progress-circular :rotate="360" :size="30" :width="3" :value="this.percentClientes" color="teal"
                class="text-button" style="font-size: 0.50rem !important;font-weight: 900;"
                v-if="((this.addsClients/this.totalClients)*100).toFixed(0) < 100">
                {{ this.percentClientes === 'NaN' ? 0 : this.percentClientes }}%
              </v-progress-circular>
              <v-icon color="green" v-else>
                far fa-check-circle
              </v-icon>
            </p>
          </v-col>
          <v-col cols="4">
            <icons icon="success" v-if="!this.sync && this.percentMedicine == 100 && this.percentClientes == 100" />
            <icons icon="info" v-else />
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions class="d-flex justify-end">
        <v-btn elevation="0" color="red" dark>Cerrar</v-btn>
        <v-btn elevation="0" color="green" @click="startSync" :disabled="this.whatSync.length==0">Sincronizar</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import axios from 'axios'
import icons from 'vue-sweetalert-icons'
export default {
  data () {
    return {
      sync:false,
      whatSync:[],
      finishSync:false,
      totalMedicines:0,
      addsMedicines:0,
      totalClients:0,
      addsClients:0
    }
  },
  computed: {
    percentMedicine() {
      this.checStatus()
      var precentReturn = 0;
      if(!Number.isNaN(((this.addsMedicines/this.totalMedicines)*100))){
        precentReturn = ((this.addsMedicines/this.totalMedicines)*100).toFixed(0);
      }
      return precentReturn;
    },
    percentClientes(){
      this.checStatus()
      var precentReturn = 0;
      if(!Number.isNaN(((this.addsClients/this.totalClients)*100))){
        precentReturn = ((this.addsClients/this.totalClients)*100).toFixed(0);
      }
      return precentReturn;
    }
  },
  components: {
    icons
  },
  methods: {
    checStatus(){
      if(((this.addsMedicines/this.totalMedicines)*100) == 100 && ((this.addsClients/this.totalClients)*100) == 100){
        this.sync = false
      }
      if((((this.addsMedicines/this.totalMedicines)*100).toFixed(0))==100){
        this.sync = false
      }
    },
    startSync(){
      this.sync = true
       for (let i = 0; i < this.whatSync.length; i++) {
         switch(this.whatSync[i]){
           case 'Clientes':
            this.SyncClients()
            break;
           case 'Medicinas':
           this.SyncMedicines()
            break;
           default:
             console.log("as")
           break;
         }
        }
    },
    async SyncMedicines(){
      try{
        const res = await axios.get(this.$store.state.server+"/sync/medicine")
        this.totalMedicines = (res.data.length)
        for (let index = 0; index < res.data.length; index++) {
          const element = res.data[index];
          await this.$store.state.db.collection('medicines').add(element)
          this.addsMedicines = index + 1
        }
      }catch (err){
        console.log(err)
      }
    },
    async SyncClients(){
      try{
        const res = await axios.get(this.$store.state.server+"/sync/medicine")
        this.totalClients = (res.data.length)
        for (let index = 0; index < res.data.length; index++) {
          const element = res.data[index];
          await this.$store.state.db.collection('clients').add(element)
          this.addsClients = index + 1
        }
      }catch (err){
        console.log(err)
      }
    }
  }
}
</script>
<style scoped>
.one {
    opacity: 0;
    -webkit-animation: dot 1.3s infinite;
    -webkit-animation-delay: 0.0s;
    animation: dot 1.3s infinite;
    animation-delay: 0.0s;
}

.two {
    opacity: 0;
    -webkit-animation: dot 1.3s infinite;
    -webkit-animation-delay: 0.2s;
      animation: dot 1.3s infinite;
      animation-delay: 0.2s;
}

.three {
    opacity: 0;
    -webkit-animation: dot 1.3s infinite;
    -webkit-animation-delay: 0.3s;
     animation: dot 1.3s infinite;
     animation-delay: 0.3s;
}

@-webkit-keyframes dot {
      0% { opacity: 0; }
     50% { opacity: 0; }
    100% { opacity: 1; }
}

@keyframes dot {
      0% { opacity: 0; }
     50% { opacity: 0; }
    100% { opacity: 1; }
}
</style>