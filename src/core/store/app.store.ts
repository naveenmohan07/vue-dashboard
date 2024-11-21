// store.ts
import { createStore } from 'vuex'
import { CURRENCY } from '../constants/app.constants'

export const appStore = createStore({
  state: {
    currency: CURRENCY.USD,
  },
  mutations: {
    setCurrency(state, currency: string) {
      state.currency = currency
    },
  },
  actions: {
    setCurrency({ commit }, currency: string) {
      commit('setCurrency', currency)
    },
  },
})

export default appStore
