import React, { Component } from 'react'
import store from '../store'

export default class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = store.getState()

    this.handleChange = this.handleChange.bind(this)
    this.updateSearchResults = this.updateSearchResults.bind(this)
    this.search = this.search.bind(this)
  }

  componentWillMount () {
    store.subscribe(this.updateSearchResults)
  }

  componentWillUnmount () {
    store.unsubscribe(this.updateSearchResults)
  }

  handleChange (e) {
    store.setKeywords(e.target.value)
    this.setState({ keywords: store.getKeywords() })
  }

  updateSearchResults () {
    this.setState({
      searchResults: store.getSearchResults()
    })
  }

  search (e) {
    e.preventDefault()
    store.fetchSearchResults()
  }

  render() {
    return (
      <div className="mw9 center w-100 border-box pa2">
        <form onSubmit={ this.search }>
          <input
            type="text"
            name="keywords"
            placeholder="Keywords"
            onChange={ this.handleChange }
            value={ this.state.keywords } />

          <input
            type="submit"
            value="Search" />
        </form>
      </div>
    )
  }
}
