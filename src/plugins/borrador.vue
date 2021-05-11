<template>
  <div>
    <v-card :loading="sync" tile>
      <v-card-title class="d-flex justify-center headline grey lighten-4">
        <span v-if="!sync">
          ¿Que deseas sincronizar?
        </span>
        <span v-else>
          {{whatSync}}
        </span>
      </v-card-title>
    </v-card>
    <v-card :disabled="sync" tile>
      <v-container v-if="!sync">
        <v-sheet class="pa-5">
          <v-switch v-model="whatSync" inset label="Medicinas" value="Medicinas"></v-switch>
          <v-switch v-model="whatSync" inset label="Clientes" value="Clientes"></v-switch>
        </v-sheet>
      </v-container>
      <v-container v-else>
        <v-row>
          <v-col cols="8" class="d-flex justify-start align-center">
            <span class="text-h6 mx-2">Medicine</span>
            <v-progress-circular :value="(this.$store.state.numberOfAction/this.$store.state.totalMedicines)*100"
              size="26" width="2" v-if="(this.$store.state.numberOfAction/this.$store.state.totalMedicines)*100 != 100">
              <span class="text-caption">
                {{((this.$store.state.numberOfAction/this.$store.state.totalMedicines)*100).toFixed(0)}}
              </span>
            </v-progress-circular>
            <v-icon color="green" v-else>
              far fa-check-circle
            </v-icon>
          </v-col>
          <v-col cols="12">
            {{((this.$store.state.numberOfAction/this.$store.state.totalMedicines))}}
            {{((this.$store.state.totalMedicines)).toFixed(0)}}
            {{((this.$store.state.numberOfAction/this.$store.state.totalMedicines)*100).toFixed(0)}}
          </v-col>
          <v-col cols="4" class="d-flex justify-center">
            <icons icon="success"
              v-if="(this.$store.state.numberOfAction/this.$store.state.totalMedicines)*100 == 100" />
            <icons icon="info" v-else />
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions class="d-flex justify-end">
        <v-btn elevation="0" color="red" dark>Cerrar</v-btn>
        <v-btn elevation="0" color="green" :disabled="whatSync.length == 0 ? true : false" @click="startSync">Sincronizar</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import icons from 'vue-sweetalert-icons'
import axios from 'axios'
export default {
  data() {
    return{
      sync:false,
      whatSync:[],
      ///Medicines variables
      totalMedicines:0,
      medicinesSave:0
    }
  },
  components: {
    icons
  },
  mounted() {
    // this.rive = new Rive({
    // src:'https://public.rive.app/community/runtime-files/52-69-marty-animation.riv',
    // canvas: document.getElementById('canvasId'),
    // autoplay: true,
    // });
    // this.initSync()
    // console.log("ppp")
  },
  computed: {
    numberAction() {
      return this.$store.state.numberOfAction;
    }
  },
  watch: {
numberAction(newCount){
      if(newCount === this.$store.state.totalMedicines) this.sync = false
    }
  },
  methods: {
    startSync() {
      this.sync = true
      this.SyncMedicine()
    },
    SyncMedicine(){
      axios({
        method: 'get',
        url: this.$store.state.server + '/sync/medicine'
      }).then((res) => {
        this.$store.state.totalMedicines = (res.data.length)
        console.log(res.data.length)
        this.$store.state.db.collection('medicine').set(res.data).then(() => {
            console.log('Set successful, now do something.')
          })
          .catch(error => {
            console.log('There was an error, do something else.' + error)
          }).finally(() => console.log("end"))
      }).catch((err)=>{
        console.log(err)
      })
    }
  }
}
</script>