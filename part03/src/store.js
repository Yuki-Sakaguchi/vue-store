/**
 * store
 */
export default {
  state: {
    target: {
      url: '',
      token: '',
      tokenList: [],
    }
  },
  setUrlAction (url) {
    this.state.target.url = url
  },
  setTokenAction (token) {
    this.state.target.token = token
  },
  setTokenListAction (tokenList) {
    this.state.target.tokenList = tokenList
  },
  removeUrlAction () {
    this.state.target.url = ''
  },
  removeTokenAction () {
    this.state.target.token = ''
  },
  removeTokenListAction () {
    this.state.target.tokenList = []
  }
}