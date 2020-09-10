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
    width: calc(16.6666% - 1.5rem);
    margin-right: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .imageItem:last-of-type {
    margin-right: 0;
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
