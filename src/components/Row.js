import PropTypes from "prop-types"
import React from "react"

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
  } else return ``
}
const Row = props => {
  const symbols = props.nodes.map((node, index) => (
    <svg
      key={node.toString() + index}
      width="20"
      height="20"
      dangerouslySetInnerHTML={{ __html: shapeLibrary(node) }}
    ></svg>
  ))
  render: {
    return (
      <div
        style={{
          display: `flex`,
          alignItems: `center`,
          maxWidth: `400px`,
          marginBottom: `1rem`,
          fontSize: `12px`,
        }}
      >
        <span style={{ width: `80px` }}>{props.title}</span>
        {symbols}
      </div>
    )
  }
}

Row.propTypes = {
  title: PropTypes.string,
  nodes: PropTypes.arrayOf(PropTypes.number),
}

Row.defaultProps = {
  title: `Traditional`,
}

export default Row
