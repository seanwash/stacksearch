import React, { Component } from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import SearchResultsList from './SearchResultsList'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />

        <SearchResultsList />
      </div>
    )
  }
}
