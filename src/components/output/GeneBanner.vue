<template>
  <v-banner>
    <template #icon>
      <span :class="(percentToChange >= 50) ? 'success--text' : 'error--text'">
        {{ percentToChange.toFixed(0) }}%
      </span>
    </template>
    <v-chip-group>
      <v-chip
        v-for="(gene, index) in geneArray"
        :key="index"
        :color="gene.color"
      >
        {{ gene.value }}
      </v-chip>
    </v-chip-group>
  </v-banner>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    geneArray: {
      type: Array,
      required: true
    },
    percentToChange: {
      type: Number,
      default: 0
    }
  }
})
</script>

<style>
</style>
