import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const FlowersWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 5;
`

const getData = graphql`
  {
    flowers: file(relativePath: { eq: "afr-flowers.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Flowers = () => {
  const data = useStaticQuery(getData)
  const imageData = data.flowers.childImageSharp.fluid
  return (
    <FlowersWrap>
      <Img fluid={imageData} alt="Airdrie Furniture Revival" />
    </FlowersWrap>
  )
}

export default Flowers
