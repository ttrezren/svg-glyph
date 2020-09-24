import React from "react"
import { Link } from "gatsby"
import Open from "../../assets/Open.svg"
import Bell from "../../assets/Bell.svg"
import Closed from "../../assets/Closed.svg"
import Space from "../../assets/Space.svg"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello Dununs</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div>
      <div
        style={{
          display: `flex`,
          alignItems: `center`,
          maxWidth: `400px`,
          marginBottom: `1rem`,
          fontSize: `12px`,
        }}
      >
        <span style={{ width: `80px` }}>Kenkeni</span>
        <Space />
        <Bell />
        <Bell />
        <Space />
        <Open />
        <Open />
        <Space />
        <Bell />
        <Bell />
        <Space />
        <Open />
        <Open />
      </div>
      <div
        style={{
          display: `flex`,
          alignItems: `center`,
          maxWidth: `400px`,
          marginBottom: `1rem`,
          fontSize: `12px`,
        }}
      >
        <span style={{ width: `80px` }}>Sangban</span>
        <Open />
        <Space />
        <Bell />
        <Space />
        <Closed />
        <Space />
        <Closed />
        <Space />
        <Bell />
        <Open />
        <Space />
        <Bell />
      </div>
      <div
        style={{
          display: `flex`,
          alignItems: `center`,
          maxWidth: `400px`,
          marginBottom: `1rem`,
          fontSize: `12px`,
        }}
      >
        <span style={{ width: `80px` }}>Dununba</span>
        <Open />
        <Space />
        <Open />
        <Space />
        <Bell />
        <Space />
        <Bell />
        <Space />
        <Open />
        <Open />
        <Space />
        <Open />
      </div>
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
