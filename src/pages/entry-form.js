import React, { Component } from "react"
// import { Link } from "gatsby"
import shapeLibrary from "../shapeLibrary"
import Layout from "../components/layout"
import Display from "../components/display"

class NameForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "Title",
      steps: 12,
      name: "Instrument",
      nodes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      rows: [],
    }

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleStepsChange = this.handleStepsChange.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleNodeChange = this.handleNodeChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.makeNode = this.makeNode.bind(this)
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value })
  }

  handleStepsChange(event) {
    const newSteps = parseInt(event.target.value)
    const emptyNodes = Array(newSteps).fill(0)
    this.setState({ steps: newSteps, nodes: emptyNodes })
    console.log(newSteps, emptyNodes)
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value })
    event.preventDefault()
  }

  handleSubmit(event) {
    let newRows = this.state.rows
    newRows.push({ name: this.state.name, nodes: this.state.nodes })
    const emptyNodes = Array(this.state.steps).fill(0)
    this.setState({ rows: newRows, name: "Instrument", nodes: emptyNodes })
    // alert(`Updated: ${this.state.name} ${this.state.nodes}`)
    event.preventDefault()
  }

  makeNode(data, index) {
    return (
      <span
        onClick={() => this.handleNodeChange(data, index)}
        onKeyPress={e => {
          console.log(e.key)
          if (e.key === " ") {
            this.handleNodeChange(data, index)
          }
        }}
        role="button"
        tabIndex="0"
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
    let newNodes = this.state.nodes
    newNodes[index] = (newNodes[index] + 1) % 4
    this.setState({ nodes: newNodes })
  }

  render() {
    return (
      <Layout>
        <form onSubmit={this.handleTitleSubmit}>
          <div>
            <input
              type="text"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
            <input
              type="number"
              value={this.state.steps}
              onChange={this.handleStepsChange}
            />
          </div>
        </form>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <label className="input-label">
              Name:
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
            </label>
            <div className="nodes">
              {this.state.nodes.map(
                (value, index) => this.makeNode(value, index),
                this
              )}
            </div>
          </div>
          <div>
            <input type="submit" value="Add Row" />
          </div>
        </form>
        <hr />
        <Display data={this.state} />
      </Layout>
    )
  }
}

export default NameForm
