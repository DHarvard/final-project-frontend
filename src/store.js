import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    editableRecipe: null,
  },
  getters: {
    currentEditableRecipe: (state) => {
      return state.editableRecipe
    },
  },
  mutations: {
    editRecipe(state, editableRecipe) {
      state.editableRecipe = editableRecipe
    },
  },
  actions: {
    editRecipe(context, recipe) {
      context.commit('editRecipe', recipe)
    },
  },
})
