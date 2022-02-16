<template>
  <v-container>
    <v-row>
      <v-col>
        <h1
          v-t="'input'"
          class="text-center"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-fade-transition group>
          <v-container
            v-for="col in cols"
            :key="col.id"
          >
            <v-row>
              <v-col>
                <genetics-gatherer
                  :col="col"
                  @gene-add="handleGeneClick(...arguments, col.id)"
                  @gene-remove="handleGeneRemove(...arguments, col.id)"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <chip-group-actions
                  @add-gene-group="$store.commit('ADD_GENE_COL', col.id)"
                  @remove-gene-group="$store.commit('REMOVE_GENE_COL', col.id)"
                  @duplicate-gene-group="$store.commit('DUPLICATE_GENE_COL', col.id)"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-fade-transition>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <add-gene-col-fab />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Gene } from '../../types'
import { mapGetters } from 'vuex'
import ChipGroupActions from './ChipGroupActions.vue'
import GeneticsGatherer from './GeneticsGatherer.vue'
import AddGeneColFab from './AddGeneColFab.vue'
export default Vue.extend({
  components: { ChipGroupActions, GeneticsGatherer, AddGeneColFab },
  computed: {
    ...mapGetters({ cols: 'getGeneCols' })
  },
  methods: {
    handleGeneClick (gene: Gene, id: number): void {
      this.$store.commit('GENE_ADD', { gene, id })
    },
    handleGeneRemove (idInGene: number, idOfCol: number): void {
      this.$store.commit('GENE_REMOVE', { idInGene, idOfCol })
    }
  }
})
</script>

<style>

</style>
