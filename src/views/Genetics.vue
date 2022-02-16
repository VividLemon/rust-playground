<template>
  <v-container
    class="mt-2"
    fluid
  >
    <v-row>
      <v-col class="text-center">
        <h1>
          {{ $t('message') }}
        </h1>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <gene-input />
      </v-col>
      <v-divider vertical />
      <v-col>
        <gene-output />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import GeneInput from '@/components/input/GeneInput.vue'
import GeneOutput from '@/components/output/GeneOutput.vue'
import Vue from 'vue'
export default Vue.extend({
  name: 'GeneticsPage',
  components: { GeneOutput, GeneInput }
})
</script>

<style>

</style>
