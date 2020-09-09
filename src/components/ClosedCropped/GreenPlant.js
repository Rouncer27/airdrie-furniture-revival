import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const GreenPlantWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 5;
`

const getData = graphql`
  {
    greenPlant: file(relativePath: { eq: "afr-greenplant.png" }) {
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
  const imageData = data.greenPlant.childImageSharp.fluid
  return (
    <GreenPlantWrap>
      <Img fluid={imageData} alt="Airdrie Furniture Revival" />
    </GreenPlantWrap>
  )
}

export default Globe
