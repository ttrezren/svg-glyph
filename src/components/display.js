import React from "react"
import Row from "./row"

const Display = props => {
  const data = props.data
  return (
    <div>
      <h1>{data.title}</h1>
      {data.rows.map(row => {
        return <Row name={row.name} nodes={row.nodes} />
      })}
    </div>
  )
}

export default Display
