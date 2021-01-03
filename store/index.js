import Vuex from 'vuex'

export default () => {
  return new Vuex.Store({
    state: {
      errors: null,
      auth: {
        user: null,
        loggedIn: false
      }, 
      dataSource: []
    },
    mutations: {
      SET_VALIDATION_ERRORS(state, errors) {
        state.errors = errors;
      },
      setAuth(state, data) {
        state.auth = data;
      },
      setUser(state, userdata) {
        state.auth.user = userdata;
      },
      setDataSource(state, data) {
        state.dataSource = data;
      },
    },
    actions: {
      async nuxtServerInit({commit}, {$auth}) {
        return $auth.getData('shoes').then(res => {
          commit('setDataSource', res)
        })
      },
      setErrors({commit}, errors) {
        commit('SET_VALIDATION_ERRORS', errors)
      },
      clearErrors({commit}) {
        commit('SET_VALIDATION_ERRORS', null)
      },
      setUser({commit}, userData) {
        commit('setUser', userData)
      },
      setAuth({commit}, auth) {
        commit('setAuth', auth)
      },
      setDataSource({commit}, data) {
        commit('setDataSource', data)
      },
    },
    getters: {
      errors(state) {
        return state.errors;
      },
      getUser(state) {
        return state.auth.user;
      },
      getDataSource(state) {
        return state.dataSource;
      }
    }
  });
};
