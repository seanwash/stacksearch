import React, { Component } from 'react'
import store from '../store'

export default class AnswerList extends Component {
  constructor (props) {
    super(props)

    this.state = store.getState()
  }

  componentWillMount () {
    store.subscribe(this.updateAnswers)
  }

  componentWillUnmount () {
    store.unsubscribe(this.updateAnswers)
  }

  updateAnswers = () => {
    this.setState({
      answers: store.getAnswers()
    })
  }

  render () {
    return (
      <div className="mw9 center cf w-100 border-box flex flex-wrap">
        {this.state.answers.map((answer) => {
          return <li key={answer.answer_id} dangerouslySetInnerHTML={{__html: answer.body }} />
        })}
      </div>
    )
  }
}
