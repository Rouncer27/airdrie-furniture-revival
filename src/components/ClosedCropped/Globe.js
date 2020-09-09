import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const GlobeWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 5;
`

const getData = graphql`
  {
    globe: file(relativePath: { eq: "afr-globe.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Globe = () => {
  const data = useStaticQuery(getData)
  const imageData = data.globe.childImageSharp.fluid
  return (
    <GlobeWrap>
      <Img fluid={imageData} alt="Airdrie Furniture Revival" />
    </GlobeWrap>
  )
}

export default Globe
