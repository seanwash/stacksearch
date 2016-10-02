// Example of a functional stateless component
// where this component is purely presentation
// and has no internal methods or state

import React, { Component } from 'react'

export default class Answer extends Component {
  render () {
    return (
      <article className="w-50 fl pa2 flex">
        <div className="w-100 br3 hidden ba b--black-10">
          <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">
            <a className="link dim mid-gray" target="_blank" href={this.props.link}>{ this.props.title }</a>
          </h1>

          <div className="ph2 pv3 bt b--black-10">
            <ul className="ma0 pa0 f6 f5-ns lh-copy measure">
              {this.props.tags.map((tag) => {
                return <li className="dib mr2 f6 f5-ns b db ph2 mid-gray" key={tag}>{ tag }</li>
              })}
            </ul>
          </div>
        </div>
      </article>
    )
  }
}
