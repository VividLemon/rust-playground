<template>
  <v-banner
    two-line
    width="100%"
  >
    <v-container>
      <v-row dense>
        <v-col>
          <div v-if="col.values.length">
            <v-slide-x-transition group>
              <v-btn
                v-for="item in col.values"
                :key="item.id"
                class="ma-1"
                :color="item.color"
                rounded
                @click="$emit('gene-remove', item.id)"
              >
                {{ item.value }}
              </v-btn>
            </v-slide-x-transition>
          </div>
          <h2
            v-else
            class="ma-2"
          >
            {{ $t('notActive') }}
          </h2>
        </v-col>
        <v-col>
          <v-chip-group>
            <v-chip
              v-for="(gene, index) in allGenes"
              :key="index"
              class="pr-5 pl-5"
              :color="gene.color"
              :disabled="col.values.length === 5"
              @click="$emit('gene-add', gene)"
            >
              {{ gene.value }}
            </v-chip>
          </v-chip-group>
        </v-col>
      </v-row>
    </v-container>
  </v-banner>
</template>

<script lang="ts">
import { Gene } from '@/types'
import Vue from 'vue'
export default Vue.extend({
  props: {
    col: {
      type: Object,
      required: true
    }
  },
  data (): {allGenes: Array<Gene>} {
    return {
      allGenes: [
        { id: 1, value: 'Y', color: 'success', number: 0.6 },
        { id: 2, value: 'G', color: 'success', number: 0.6 },
        { id: 3, value: 'H', color: 'success', number: 0.6 },
        { id: 4, value: 'X', color: 'error', number: 1 },
        { id: 5, value: 'W', color: 'error', number: 1 }
      ]
    }
  }
})
</script>

<style>
</style>
