/**
 * Created by an.han on 16/10/15.
 */

export default {
    state: {
        count: 0,
        error: {}
    },
  mutations: {
      increment (state) {
          state.count++
      }, error(state, error){
          state.error = error
      }
  }
}