import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    sectionCount: 0,
    blockSectionCount: 0,
    cardStoryCount: 0,
    cardStoryOpenCount: 0,
    inputCount: 0,
    saveEvent: false,
    dataStoryArrayCount: 0,
  },
  mutations: {
    incrementSection (state) {
      state.sectionCount++
    },
    incrementBlockSection (state) {
      state.blockSectionCount++
    },
    incrementCardStory (state) {
      state.cardStoryCount++
    },
    incrementOpenCardStory (state) {
      state.cardStoryOpenCount++
    },
    incrementInput (state) {
      state.inputCount++
    },
    incrementStoryData (state) {
      state.dataStoryArrayCount++
    },
    resetCardStory (state) {
      state.cardStoryCount = 0
    },
    resetSection (state) {
        state.sectionCount = 0
    },
    resetBlockSection (state) {
      state.blockSectionCount = 0
    },
    resetInput (state) {
      state.inputCount = 0
    },
    changeState (state) {
      state.saveEvent = true;
    },
    resetState (state) {
      state.saveEvent = false;
    },
    resetStoryData (state) {
      state.dataStoryArrayCount = 0;
    }
  },
})