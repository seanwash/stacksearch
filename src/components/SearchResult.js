import React, { Component } from 'react'
import store from '../store'
import AnswerList from './AnswerList'
import Modal from 'react-modal'

export default class SearchResult extends Component {
  constructor () {
    super()

    this.state = {
      viewingAnswer: false
    }

    this.closeModal = this.closeModal.bind(this)
  }

  viewAnswers = () => {
    store.setSelectedQuestion(this.props.id)
    store.fetchAnswers()

    this.setState({
      viewAnswers: true
    })
  }

  closeModal () {
    this.setState({
      viewAnswers: false
    })
  }

  render () {
    return (
      <article className="w-50 fl pa2 flex">
        <div className="w-100 br3 hidden ba b--black-10">
          <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">
            <a className="link dim mid-gray" target="_blank" href={ this.props.link }>{ this.props.title }</a>
          </h1>

          <div className="ph2 pv3 bt b--black-10">
            <p className="ph2 ma0 mb2">{ this.props.answerCount } Answers</p>

            <ul className="ma0 pa0 f6 f5-ns lh-copy measure">
              {this.props.tags.map((tag) => {
                return <li className="dib mr2 f6 f5-ns b db ph2 mid-gray" key={tag}>{ tag }</li>
              })}
            </ul>
          </div>

          <button
            type="button"
            onClick={this.viewAnswers}
          >View Answers</button>
        </div>

        <Modal isOpen={this.state.viewAnswers}>
          <button
            type="button"
            onClick={this.closeModal}
          >Close</button>

          <AnswerList />
        </Modal>
      </article>
    )
  }
}
