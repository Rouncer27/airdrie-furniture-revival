import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const IconWrap = styled.div`
  width: 100%;
  height: 100%;
`

const getData = graphql`
  {
    icon: file(relativePath: { eq: "icon-desk.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const IconDesk = () => {
  const data = useStaticQuery(getData)
  const imageData = data.icon.childImageSharp.fluid
  return (
    <IconWrap>
      <Img fluid={imageData} alt="Airdrie Funiture Revival" />
    </IconWrap>
  )
}

export default IconDesk
