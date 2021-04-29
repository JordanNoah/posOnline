<template>
    <div>
        <v-icon v-if="this.statusSync">fas fa-sync-alt fa-spin</v-icon>
        <v-icon v-else>fas fa-sync-alt</v-icon>
    </div>
</template>
<script>
export default {
    data:()=>({
        statusSync:false
    })
}
</script>