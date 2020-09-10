import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const GreenPaintWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 5;
`

const getData = graphql`
  {
    greenPlant: file(relativePath: { eq: "afr-greenpaint.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const GreenPaint = () => {
  const data = useStaticQuery(getData)
  const imageData = data.greenPlant.childImageSharp.fluid
  return (
    <GreenPaintWrap>
      <Img fluid={imageData} alt="Airdrie Furniture Revival" />
    </GreenPaintWrap>
  )
}

export default GreenPaint
