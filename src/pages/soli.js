import React from "react"
import Display from "../components/display"
import Layout from "../components/layout"

const data = {
  title: "Soli",
  rows: [
    {
      name: "Kenkeni",
      nodes: [0, 1, 1, 0, 2, 2, 0, 1, 1, 0, 2, 2],
    },
    {
      name: "Sangban",
      nodes: [2, 0, 1, 0, 3, 0, 3, 0, 1, 2, 0, 1],
    },
    {
      name: "Dununba",
      nodes: [2, 0, 2, 0, 1, 0, 1, 0, 2, 2, 0, 2],
    },
  ],
}
const Soli = () => (
  <Layout>
    <Display data={data}></Display>
  </Layout>
)

export default Soli
