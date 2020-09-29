import React from "react"
import { Link } from "gatsby"
import Row from "../components/Row"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <h1>Soli</h1>
    <SEO title="Home" />
    <Row title="Kenkeni" nodes={[0, 1, 1, 0, 2, 2, 0, 1, 1, 0, 2, 2]} />
    <Row title="Sangban" nodes={[2, 0, 1, 0, 3, 0, 3, 0, 1, 2, 0, 1]} />
    <Row title="Dununba" nodes={[2, 0, 2, 0, 1, 0, 1, 0, 2, 2, 0, 2]} />
  </Layout>
)

export default IndexPage
