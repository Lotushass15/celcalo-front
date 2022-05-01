import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    empId: '',
    password:'',
  },
  getters: {
    userInfo: state => state.empId? state.empId: '',
  },
  mutations: {
    updateEmpId(state, empId) {
      state.empId = empId;
    },
    updatePassword(state, password) {
      state.password = password;
    },
  },
  actions: {
  },
  modules: {
  }
})
