import React from "react"
import { Link } from "gatsby"
import Row from "../components/Row"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div>
      <h3>Click a name:</h3>
      <div style={{ display: `flex`, padding: `5px` }}>
        <SEO title="Home" />
        <Link to="/soli" style={{ margin: `5px` }}>
          Soli
        </Link>
        <Link to="/guidanba" style={{ margin: `5px` }}>
          Guidanba
        </Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
