import React from 'react'

const SearchBar = React.createClass({
  getInitialState () {
    return {
      keywords: 'Hello!'
    }
  },

  handleChange (e) {
    this.setState({ keywords: e.target.value })
  },

  search (e) {
    e.preventDefault()
  },

  render() {
    return (
      <div className="w-100 border-box pa3 ph5-ns">
        <form onSubmit={this.search}>
          <input
            type="text"
            name="keywords"
            placeholder="Keywords"
            onChange={this.handleChange}
            value={this.state.keywords} />

          <input
            type="submit"
            value="Search" />
        </form>
      </div>
    )
  }
})

export default SearchBar
