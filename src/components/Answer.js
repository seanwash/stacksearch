import React, { Component } from 'react'

export default class Answer extends Component {
  render () {
    return (
      <article className="">
        <div className="w-100 br3 hidden ba b--black-10" dangerouslySetInnerHTML={{__html: this.props.body }} />
      </article>
    )
  }
}
