import React from "react"
import Row from "../components/row"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>Soli</h1>
    <Row title="Kenkeni" nodes={[0, 1, 1, 0, 2, 2, 0, 1, 1, 0, 2, 2]} />
    <Row title="Sangban" nodes={[2, 0, 1, 0, 3, 0, 3, 0, 1, 2, 0, 1]} />
    <Row title="Dununba" nodes={[2, 0, 2, 0, 1, 0, 1, 0, 2, 2, 0, 2]} />
  </Layout>
)

export default IndexPage
