import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { medWrapper } from "../../../styles/helpers"

const ShowcaseSection = styled.div`
  .wrapper {
    ${medWrapper};
    margin-top: 0;
    padding-top: 0;
  }

  .imageItem {
    width: calc(16.6666% - 1rem);
    margin: auto 0.5rem;
  }
`

const Showcase = ({ showcase }) => {
  return (
    <ShowcaseSection>
      <div className="wrapper">
        {showcase.acf._afc_home_showcase_images.map((image, index) => {
          return (
            <div className="imageItem" key={index}>
              <Img
                fluid={image.image.localFile.childImageSharp.fluid}
                alt={image.image.alt_text}
              />
            </div>
          )
        })}
      </div>
    </ShowcaseSection>
  )
}

export default Showcase
