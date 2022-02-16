<template>
  <v-btn
    fab
    elevation="2"
    fixed
    bottom
    right
    color="secondary"
    :aria-label="$t('aria.addGene')"
    @click="$store.commit('ADD_GENE_COL_BY_PUSH')"
  >
    <v-icon>mdi-plus</v-icon>
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>

<style>

</style>
