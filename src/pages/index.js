import * as React from "react"
import Layout from "../components/Layout"

const IndexPage = () => {
  return (
    <Layout>
      <section className="home">
        <h1>Testing gatsby</h1>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
