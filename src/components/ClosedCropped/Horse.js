import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const HorseWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 5;
`

const getData = graphql`
  {
    horse: file(relativePath: { eq: "afr-horse.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Horse = () => {
  const data = useStaticQuery(getData)
  const imageData = data.horse.childImageSharp.fluid
  return (
    <HorseWrap>
      <Img fluid={imageData} alt="Airdrie Furniture Revival" />
    </HorseWrap>
  )
}

export default Horse
