import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const getData = graphql`
  {
    mainLogo: wordpressAcfOptions {
      options {
        afr_main_logo {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 350) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`

const HeaderLogoWrap = styled.div`
  align-self: center;
  width: 100%;
  padding: 2rem;

  @media (min-width: 768px) {
    width: 100%;
    padding: 2rem;
  }

  .gatsby-image-wrapper {
    max-width: 25rem;
    margin: auto;

    @media (min-width: 768px) {
      width: 100%;
    }
  }

  h1 {
    margin: 0;
    padding: 0;

    span {
      display: block;
      position: absolute;
      left: -999%;
    }
  }
`

const HeaderLogo = ({ siteTitle }) => {
  const data = useStaticQuery(getData)
  const { mainLogo } = data
  return (
    <HeaderLogoWrap>
      <h1>
        <Link to="/">
          <span>{siteTitle}</span>
          <Img
            fluid={
              mainLogo.options.afr_main_logo.localFile.childImageSharp.fluid
            }
            alt={mainLogo.options.afr_main_logo.alt_text}
          />
        </Link>
      </h1>
    </HeaderLogoWrap>
  )
}

export default HeaderLogo
