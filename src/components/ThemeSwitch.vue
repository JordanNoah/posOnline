<template>
	<v-checkbox v-model="checkbox" off-icon="fas fa-moon" on-icon="mdi-white-balance-sunny" :label="`Checkbox 1: ${checkbox.toString()}`"></v-checkbox>
</template>
<script>
  export default {
    data () {
      return {
        checkbox: true,
      }
    },
  }
</script>