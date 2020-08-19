import React from "react"

import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "./index.css"
const IndexPage = ({ data }) => {
  console.log("data", data)
  return (
    <div>
      <h1>Merhaba</h1>
      <div className="photos">
        {data.allFile.edges.map(({ node }) => {
          return <Img key={node.id} fluid={node.childImageSharp.fluid} />
        })}
      </div>
    </div>
  )
}

export const photosQuery = graphql`
  {
    allFile(filter: { absolutePath: { regex: "//photos//" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default IndexPage
