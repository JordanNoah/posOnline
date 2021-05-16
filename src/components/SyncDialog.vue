<template>
  <div>
    <v-card tile>
      <v-card-title class="d-flex justify-center headline grey lighten-4">
        <span v-if="!this.sync && this.totalClients == 0 && this.totalMedicines == 0">
          ¿Que desea sincronizar?
        </span>
        <span v-else-if="this.sync && this.percentMedicine == 100 && this.percentClientes == 100">
          Sincronizado
        </span>
        <span v-else>
          Sincronizando
          <span class="one">.</span>
          <span class="two">.</span>
          <span class="three">.</span>
        </span>
      </v-card-title>
    </v-card>
    <v-card tile>
      <v-container v-if="!this.sync && this.totalClients == 0 && this.totalMedicines == 0">
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
                {{ this.percentMedicine}}%
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
                {{ this.percentClientes }}%
              </v-progress-circular>
              <v-icon color="green" v-else>
                far fa-check-circle
              </v-icon>
            </p>
          </v-col>
          <v-col cols="4">
            <icons icon="success" v-if="this.sync && (this.percentMedicine == 100 && this.percentClientes == 100)" />
            <icons icon="info" v-else />
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card tile>
      <v-card-actions class="d-flex justify-end">
        <v-btn elevation="0" color="red" :disabled="(this.percentMedicine != 100 || this.percentClientes != 100)" @click="closeDialog()">Cerrar</v-btn>
        <v-btn elevation="0" color="green" @click="startSync" :disabled="this.whatSync.length==0"
          v-if="!this.sync">Sincronizar</v-btn>
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
      var precentReturn = 0;
      if(!Number.isNaN(((this.addsMedicines/this.totalMedicines)*100))){
        precentReturn = ((this.addsMedicines/this.totalMedicines)*100).toFixed(0);
      }else{
        precentReturn = 100
      }
      this.checkStatus(precentReturn)
      return precentReturn;
    },
    percentClientes(){
      var precentReturn = 0;
      if(!Number.isNaN(((this.addsClients/this.totalClients)*100))){
        precentReturn = ((this.addsClients/this.totalClients)*100).toFixed(0);
      }else{
        precentReturn = 100
      }
      this.checkStatus(precentReturn)
      return precentReturn;
    }
  },
  components: {
    icons
  },
  methods: {
    checkStatus(precentReturn){
      if(precentReturn != 100){
        this.$store.state.syncStatus = true
      }else{
        this.$store.state.syncStatus = false
      }
    },
    closeDialog(){
      this.sync=false,
      this.whatSync=[],
      this.finishSync=false,
      this.totalMedicines=0,
      this.addsMedicines=0,
      this.totalClients=0,
      this.addsClients=0
      this.$store.commit('closeDialogSync')
    },
    startSync(){
      this.sync = true
      this.$store.state.syncStatus = true;
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
        await this.$store.state.db.collection('medicines').delete()
        console.log(res.data)
        for (let index = 0; index < this.totalMedicines; index++) {
          const element = res.data[index];
          const imageRes = await axios.get(element.image,{responseType:'arraybuffer'})
          var idMedicine = element.idMedicine;
          var name = element.name;
          var imgBase64 = 'data:;base64,' + btoa(new Uint8Array(imageRes.data).reduce((data,byte)=>data + String.fromCharCode(byte),''))
          var price = element.price;
          var createdAt = element.createdAt;
          var updatedAt = element.updatedAt;
          await this.$store.state.db.collection('medicines').add({id:idMedicine,name:name,image:imgBase64,price:price,createdAt:createdAt,updatedAt:updatedAt})
          this.addsMedicines = index + 1
        }
      }catch (err){
        console.log(err)
      }
    },
    async SyncClients(){
      try{
        const res = await axios.get(this.$store.state.server+"/sync/client")
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