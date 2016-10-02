// http://codeutopia.net/blog/2016/02/01/react-application-data-flow-where-and-how-to-store-your-data/
import { EventEmitter } from 'events'
import axios from 'axios'
import data from './data'

const emitter = new EventEmitter()

let store = {
  apiBaseUrl: 'https://api.stackexchange.com/2.2/',
  keywords: 'react',
  searchResults: data,
  answers: [],
  selectedQuestion: {}
}

module.exports = {
  getState () {
    return store
  },

  setState (state) {
    store = state
    emitter.emit('update')
  },

  subscribe (callback) {
    emitter.on('update', callback)
  },

  unsubscribe (callback) {
    emitter.off('update', callback)
  },


  getKeywords () {
    return store.keywords
  },

  setKeywords (keywords) {
    store.keywords = keywords
    emitter.emit('update')
  },


  fetchSearchResults () {
    axios.get(`${store.apiBaseUrl}search?order=desc&sort=activity&site=stackoverflow&intitle=${store.keywords}`)
    .then((response) => {
      console.log('fetchSearchResults', response.data)
      this.setSearchResults(response.data.items)
    })
    .catch((error) => {
      console.error('fetchSearchResults', error)
    })
  },

  getSearchResults () {
    return store.searchResults
  },

  setSearchResults (results) {
    store.searchResults = results
    emitter.emit('update')
  },


  getSelectedQuestion () {
    return store.selectQuestion
  },

  setSelectedQuestion (question) {
    store.selectQuestion = question
    emitter.emit('update')
  },


  fetchAnswers () {
    axios.get(`${store.apiBaseUrl}questions/${store.selectQuestion}/answers?order=desc&sort=activity&site=stackoverflow&filter=!-*f(6t*Zcw6a`)
    .then((response) => {
      console.log('fetchAnswers', response.data)
      this.setAnswers(response.data.items)
    })
    .catch((error) => {
      console.error('fetchAnswers', error)
    })
  },

  getAnswers () {
    return store.answers
  },

  setAnswers (answers) {
    store.answers = answers
    emitter.emit('update')
  }
}
