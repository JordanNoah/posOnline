<template>
  <table class="text-center" style="width:100%;height:100%;">
    <tbody>
      <tr>
        <td class="number">
          <v-btn class="font-weight-bold" color="#f6f6f6" width="100%" height="100%" elevation="0" tile>1</v-btn>
        </td>
        <td class="number">
          <v-btn class="font-weight-bold" color="#f6f6f6" width="100%" height="100%" elevation="0" tile>2</v-btn>
        </td>
        <td class="number">
          <v-btn class="font-weight-bold" color="#f6f6f6" width="100%" height="100%" elevation="0" tile>3</v-btn>
        </td>
        <td rowspan="2" class="number">
          <v-btn class="font-weight-bold" color="#f6f6f6" width="100%" height="100%" elevation="0" tile>
            <v-icon>
              fas fa-backspace
            </v-icon>
          </v-btn>
        </td>
      </tr>
      <tr>
        <td class="number">
          <v-btn class="font-weight-bold" color="#f6f6f6" width="100%" height="100%" elevation="0" tile>4</v-btn>
        </td>
        <td class="number">
          <v-btn class="font-weight-bold" color="#f6f6f6" width="100%" height="100%" elevation="0" tile>5</v-btn>
        </td>
        <td class="number">
          <v-btn class="font-weight-bold" color="#f6f6f6" width="100%" height="100%" elevation="0" tile>6</v-btn>
        </td>
      </tr>
      <tr>
        <td class="number">
          <v-btn class="font-weight-bold" color="#f6f6f6" width="100%" height="100%" elevation="0" tile>7</v-btn>
        </td>
        <td class="number">
          <v-btn class="font-weight-bold" color="#f6f6f6" width="100%" height="100%" elevation="0" tile>8</v-btn>
        </td>
        <td class="number">
          <v-btn class="font-weight-bold" color="#f6f6f6" width="100%" height="100%" elevation="0" tile>9</v-btn>
        </td>
        <td rowspan="2" class="okButton">
          <v-btn class="font-weight-bold" color="#2b91e2" width="100%" height="100%" elevation="0" tile dark>OK</v-btn>
        </td>
      </tr>
      <tr>
        <td class="number">
          <v-btn class="font-weight-bold" color="#f6f6f6" width="100%" height="100%" elevation="0" tile>.</v-btn>
        </td>
        <td class="number">
          <v-btn class="font-weight-bold" color="#f6f6f6" width="100%" height="100%" elevation="0" tile>0</v-btn>
        </td>
        <td class="number">
          <v-btn class="font-weight-bold" color="#f6f6f6" width="100%" height="100%" elevation="0" tile>
            <v-icon>
              fas fa-arrow-right
            </v-icon>
          </v-btn>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  data() {
    return {
      clientSize : 0
    }
  },
  methods: {
    onResize() {
        this.clientSize = this.$refs.client.clientWidth
        console.log(this.clientSize)
      },
  }
}
</script>
<style scoped>
 table, td {
  border: 1px solid #ddd;
  border-collapse: collapse;
}
td{
  width: 25%;
}
.number{
    background-color:#f6f6f6;
    font-weight: 600;
    text-align: center;
    border: 1px solid #ddd;
}


.okButton{
  background-color:#2b91e2;
    font-weight: 600;
    color: #ddd;
  
} 
</style>