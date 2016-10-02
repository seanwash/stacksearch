import React, { Component } from 'react'
import store from '../store'
import SearchResult from './SearchResult'
import AnswerList from './AnswerList'

export default class SearchResultsList extends Component {
  constructor (props) {
    super(props)

    this.state = store.getState()

    this.updateSearchResults = this.updateSearchResults.bind(this)
  }

  componentWillMount () {
    store.subscribe(this.updateSearchResults)
  }

  componentWillUnmount () {
    store.unsubscribe(this.updateSearchResults)
  }

  updateSearchResults () {
    this.setState({
      searchResults: store.getSearchResults()
    })
  }

  render () {
    return (
      <div className="mw9 center cf w-100 border-box flex flex-wrap">
        <AnswerList />

        {this.state.searchResults.map((question) => {
          return <SearchResult
                  key={ question.question_id }
                  id={ question.question_id }
                  title={ question.title }
                  link={ question.link }
                  answerCount={ question.answer_count }
                  tags={ question.tags } />
        })}
      </div>
    )
  }
}
