import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const ClosedWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 5;
`

const getData = graphql`
  {
    paintBrush: file(relativePath: { eq: "afr-paint-brush.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const PaintBush = () => {
  const data = useStaticQuery(getData)
  const imageData = data.paintBrush.childImageSharp.fluid
  return (
    <ClosedWrap>
      <Img fluid={imageData} alt="Airdrie Furniture Revival" />
    </ClosedWrap>
  )
}

export default PaintBush
