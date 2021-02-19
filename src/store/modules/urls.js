const state = {
  styleTransferServer: 'http://localhost:4000'
  // styleTransferServer: 'http://172.27.186.222:4001'
}

const getters = {
  urlOf: state => server => state[server]
}

const mutations = {
}

const actions = {
}

export default {
  state,
  getters,
  mutations,
  actions
}
