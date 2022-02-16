<template>
  <v-container>
    <v-row>
      <v-col>
        <h1
          v-t="'output'"
          class="text-center"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(array, index) in cartesianProduct"
        :key="index"
      >
        <gene-banner
          :gene-array="array"
          :percent-to-change="percentToChange"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Gene, GeneSet } from '@/types'
import Vue from 'vue'
import { mapGetters } from 'vuex'
import GeneBanner from './GeneBanner.vue'
export default Vue.extend({
  components: { GeneBanner },
  computed: {
    ...mapGetters({ cols: 'getGeneCols' }),
    arraysBySlot (): Array<Array<Gene>> {
      const array: Array<Array<Gene>> = [[], [], [], [], []]
      this.cols.forEach((element: {id: number, values: Array<Gene>}) => {
        let counter = 0
        for (const iterator of element.values) {
          array[counter].push(iterator)
          counter++
        }
      })
      return array
    },
    valuesBySlot (): Array<GeneSet> {
      const array: Array<GeneSet> = [{ yValue: 0, gValue: 0, hValue: 0, xValue: 0, wValue: 0 }, { yValue: 0, gValue: 0, hValue: 0, xValue: 0, wValue: 0 }, { yValue: 0, gValue: 0, hValue: 0, xValue: 0, wValue: 0 }, { yValue: 0, gValue: 0, hValue: 0, xValue: 0, wValue: 0 }, { yValue: 0, gValue: 0, hValue: 0, xValue: 0, wValue: 0 }]
      let counter = 0
      this.arraysBySlot.forEach((element: Array<Gene>) => {
        for (const iterator of element) {
          switch (iterator.value) {
            case 'Y':
              array[counter].yValue = array[counter].yValue + iterator.number
              break
            case 'G':
              array[counter].gValue = array[counter].gValue + iterator.number
              break
            case 'H':
              array[counter].hValue = array[counter].hValue + iterator.number
              break
            case 'X':
              array[counter].xValue = array[counter].xValue + iterator.number
              break
            case 'W':
              array[counter].wValue = array[counter].wValue + iterator.number
              break
          }
        }
        counter = counter + 1
      })
      return array
    },
    resultValues (): Array<{id: number, values: Array<Gene>}> {
      const whole: Array<{id: number, values: Array<Gene>}> = []
      let count = 0
      this.valuesBySlot.forEach((element: GeneSet) => {
        const arr = Object.entries(element).sort((a, b) => b[1] - a[1])
        const highestValue: number = arr[0][1]
        if (highestValue !== 0) {
          const highest = arr.filter((element) => element[1] === highestValue)
          const deep: {id: number, values: Array<Gene>} = { id: count, values: [] }
          let innerCount = 0
          highest.forEach((element) => {
            switch (element[0]) {
              case 'yValue':
                deep.values.push({ id: innerCount, value: 'Y', color: 'success', number: element[1] })
                break
              case 'gValue':
                deep.values.push({ id: innerCount, value: 'G', color: 'success', number: element[1] })
                break
              case 'hValue':
                deep.values.push({ id: innerCount, value: 'H', color: 'success', number: element[1] })
                break
              case 'xValue':
                deep.values.push({ id: innerCount, value: 'X', color: 'error', number: element[1] })
                break
              case 'wValue':
                deep.values.push({ id: innerCount, value: 'W', color: 'error', number: element[1] })
                break
              default:
                deep.values.push({ id: innerCount, value: 'Y', color: 'success', number: element[1] })
            }
            innerCount = innerCount + 1
          })
          whole.push(deep)
        }
        count = count + 1
      })
      return whole
    },
    percentToChange (): number {
      return 100 / this.cartesianProduct.length
    },
    convertToArray (): Array<Array<Gene>> {
      return Object.entries(this.resultValues).map(el => el[1].values)
    },
    cartesianProduct (): Array<Array<Gene>> {
      return this.convertToArray.reduce((a, b) =>
        a.map((x) =>
          b.map((y) =>
            x.concat([y as never])))
          .reduce((a, b) => a.concat(b), []), [[]])
    }
  }
})
</script>

<style>

</style>
