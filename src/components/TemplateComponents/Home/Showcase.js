import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const ShowcaseSection = styled.div`
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: calc(100% - 1.5rem);
    margin: auto;
    margin-right: 0.75rem;
    margin-left: 0.75rem;
  }

  .imageItem {
    width: calc((100% / (${props => props.numImages} / 2)) - 1.5rem);
    margin-right: 0.75rem;
    margin-left: 0.75rem;
    margin-bottom: 1.5rem;

    @media (min-width: 768px) {
      width: calc((100% / ${props => props.numImages}) - 1.5rem);
      margin-right: 1.5rem;
      margin-left: 0;
      margin-bottom: 1.5rem;
    }
  }

  .imageItem:last-of-type {
    @media (min-width: 768px) {
      margin-right: 0;
    }
  }
`

const Showcase = ({ showcase }) => {
  return (
    <ShowcaseSection numImages={showcase.acf._afc_home_showcase_images.length}>
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
