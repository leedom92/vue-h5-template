import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import { setToken, getToken, setUserId, encryptedData } from '_u/auth'
import { SET_TOKEN, SET_USERID } from './mutations-types'
import { login, getUserInfo } from '_a/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: getToken(),
    userid: null,
  },
  mutations: {
    [SET_TOKEN](state, token) {
      state.token = token
    },
    [SET_USERID](state, userid) {
      state.userid = userid
    },
  },
  actions: {
    login({ commit }, userInfo) {
      const { account, password, code } = userInfo
      return new Promise((resolve, reject) => {
        login({
          account: encryptedData(account.trim()),
          password: encryptedData(password.trim()),
          code: code.trim(),
        }).then((res) => {
          const { token } = res.data
          commit(SET_TOKEN, token)
          setToken(token)
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    getUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo({ system: 'sc' }).then((res) => {
          const { user } = res.data
          commit(SET_USERID, user.userId)
          setUserId(user.userId)
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
      })
    },
  },
  getters,
})
