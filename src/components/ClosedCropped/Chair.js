import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const ChairWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 5;
`

const getData = graphql`
  {
    chair: file(relativePath: { eq: "afr-chair.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Chair = () => {
  const data = useStaticQuery(getData)
  const imageData = data.chair.childImageSharp.fluid
  return (
    <ChairWrap>
      <Img fluid={imageData} alt="Airdrie Furniture Revival" />
    </ChairWrap>
  )
}

export default Chair
