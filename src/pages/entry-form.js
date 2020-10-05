import React, { Component } from "react"
import { Link } from "gatsby"
// import Row from "../components/row"

const shapeLibrary = type => {
  if (type === 1) {
    return `
      <line x1="5" y1="5" x2="15" y2="15" stroke="black" strokeWidth="1" />
      <line x1="5" y1="15" x2="15" y2="5" stroke="black" strokeWidth="1" />
    `
  } else if (type === 2) {
    return `<circle r="7" cx="10" cy="10" fill="white" stroke="black" />`
  } else if (type === 3) {
    return `<circle r="5" cx="10" cy="10" fill="black" />`
  } else return `<circle r="1" cx="10" cy="10" fill="black" />`
}

class NameForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "Sangban",
      nodes: [3, 1, 0, 1, 0, 1, 1, 0, 1, 0, 2, 0],
    }

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleNodeChange = this.handleNodeChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.makeNode = this.makeNode.bind(this)
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value })
  }

  handleSubmit(event) {
    alert(`Updated: ${this.state.title} ${this.state.nodes}`)
    event.preventDefault()
  }

  makeNode(data, index) {
    return (
      <span
        onClick={() => this.handleNodeChange(data, index)}
        onKeyUp={() => this.handleNodeChange(data, index)}
        role="button"
        key={index}
      >
        <svg
          width="20px"
          height="20px"
          key={data.toString()}
          dangerouslySetInnerHTML={{ __html: shapeLibrary(data) }}
        ></svg>
      </span>
    )
  }

  handleNodeChange(data, index) {
    // alert(`A node was clicked: ${data} ${index} ${this.state.nodes[index]}`)
    let newNodes = this.state.nodes
    newNodes[index] = (newNodes[index] + 1) % 4
    this.setState({ nodes: newNodes })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
          {this.state.nodes.map(
            (value, index) => this.makeNode(value, index),
            this
          )}
          {/* <Row title={this.state.title} nodes={this.state.nodes} /> */}
        </label>
        <div>
          <input type="submit" value="Submit" />
          <Link to="/">Return to Home</Link>
        </div>
      </form>
    )
  }
}

export default NameForm
