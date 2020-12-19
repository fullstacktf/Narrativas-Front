import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    sectionCount: 0,
    blockSectionCount: 0,
    cardStoryCount: 0
  },
  mutations: {
    incrementSection (state) {
      state.sectionCount++
    },
    incrementBlockSection (state) {
      state.blockSectionCount++
    },
    incrementCardStory () {
      state.cardStoryCount++
    },
    resetCardStory (state) {
      state.cardStoryCount = 0
    },
    resetSection (state) {
        state.sectionCount = 0
    },
    resetBlockSection (state) {
      state.blockSectionCount = 0
    }
  }
})