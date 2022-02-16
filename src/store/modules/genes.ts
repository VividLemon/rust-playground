import { Gene } from '@/types'
import { State } from '../vuex'

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const state = () => ({
  cols: [
    {
      id: 1,
      values: [
        { id: 1, value: 'Y', color: 'success', number: 0.6 },
        { id: 2, value: 'G', color: 'success', number: 0.6 },
        { id: 3, value: 'H', color: 'success', number: 0.6 },
        { id: 4, value: 'X', color: 'error', number: 1 },
        { id: 5, value: 'W', color: 'error', number: 1 }
      ]
    },
    {
      id: 2,
      values: [
        { id: 1, value: 'G', color: 'success', number: 0.6 },
        { id: 2, value: 'Y', color: 'success', number: 0.6 },
        { id: 3, value: 'X', color: 'error', number: 1 },
        { id: 4, value: 'X', color: 'error', number: 1 },
        { id: 5, value: 'W', color: 'error', number: 1 }
      ]
    }
  ]
})

const getters = {
  getGeneCols: (state: State) => {
    return state.cols
  },
  getColsLength: (state: State) => {
    return state.cols.length
  }
}

const mutations = {
  ADD_GENE_COL (state: State, id: number) {
    const index = state.cols.findIndex(el => el.id === id)
    const highestId = state.cols.reduce((p, c) => p.id > c.id ? p : c).id + 1
    const obj = {
      id: highestId,
      values: []
    }
    state.cols.splice(index + 1, 0, obj)
  },
  ADD_GENE_COL_BY_PUSH (state: State) {
    const highestId = state.cols.reduce((p, c) => p.id > c.id ? p : c).id + 1
    const obj = {
      id: highestId,
      values: []
    }
    state.cols.push(obj)
  },
  REMOVE_GENE_COL (state: State, id: number) {
    const index = state.cols.findIndex(el => el.id === id)
    state.cols.splice(index, 1)
  },
  DUPLICATE_GENE_COL (state: State, id: number) {
    const index = state.cols.findIndex(el => el.id === id)
    const highestId = state.cols.reduce((p, c) => p.id > c.id ? p : c).id + 1
    const obj = {
      id: highestId,
      values: [...state.cols[index].values]
    }
    state.cols.splice(index + 1, 0, obj)
  },
  GENE_ADD (state: State, { gene, id }: {gene: Gene, id: number}) {
    const index = state.cols.findIndex(el => el.id === id)
    const col = state.cols[index].values
    const idInGene = col[col.length - 1]?.id
    const obj: Gene = {
      id: (idInGene != null) ? idInGene + 1 : 0,
      color: gene.color,
      number: gene.number,
      value: gene.value
    }
    col.push(obj)
  },
  GENE_REMOVE (state: State, { idInGene, idOfCol }: {idInGene: number, idOfCol: number}) {
    const index = state.cols.findIndex(el => el.id === idOfCol)
    const col = state.cols[index].values
    col.splice(col.findIndex(el => el.id === idInGene), 1)
  }
}

export default {
  state,
  getters,
  mutations
}
