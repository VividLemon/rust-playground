<template>
  <div>
    <v-chip
      color="success"
      style="float:right;"
      class="ml-1"
      :aria-label="$t('aria.addGene')"
      @click="$emit('add-gene-group')"
    >
      <v-icon>mdi-plus</v-icon>
    </v-chip>
    <v-chip
      :disabled="length <= 1"
      color="error"
      style="float:right;"
      class="ml-1"
      :aria-label="$t('aria.removeGene')"
      @click="$emit('remove-gene-group')"
    >
      <v-icon>mdi-minus</v-icon>
    </v-chip>
    <v-chip
      color="secondary"
      style="float:right;"
      class="ml-1"
      :aria-label="$t('aria.duplicateGene')"
      @click="$emit('duplicate-gene-group')"
    >
      <v-icon>mdi-arrow-collapse-down</v-icon>
    </v-chip>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.extend({
  computed: {
    ...mapGetters({ length: 'getColsLength' })
  }
})
</script>

<style>

</style>
