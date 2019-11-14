import {  getUser, setUser } from '@/utils/sessionStorage'

const user = {
  state: {
    user: getUser(),
  },
  getters: {
    user: state => state.user
  },
  mutations: {
    setUser (state, user) {
      state.user = user
      setUser(user)
    }
  }
}

export default user
