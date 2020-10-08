import PropTypes from "prop-types"
import React from "react"
import shapeLibrary from "../shapeLibrary"

const Row = props => {
  const symbols = props.nodes.map((node, index) => (
    <svg
      key={node.toString() + index}
      width="20"
      height="20"
      dangerouslySetInnerHTML={{ __html: shapeLibrary(node) }}
    ></svg>
  ))
  return (
    <div className="row">
      <span className="label">{props.name}</span>
      {symbols}
    </div>
  )
}

Row.propTypes = {
  name: PropTypes.string,
  nodes: PropTypes.arrayOf(PropTypes.number),
}

Row.defaultProps = {
  name: `Traditional`,
}

export default Row
