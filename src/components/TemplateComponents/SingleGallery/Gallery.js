import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import {
  colors,
  H1White,
  medWrapper,
  standardWrapper,
} from "../../../styles/helpers"

const GalleryStyled = styled.section`
  .gallerTitle {
    padding: 5rem 2rem;
    background: ${colors.colorTertiary};

    &__wrapper {
      ${standardWrapper};
      margin: auto;
      padding: 0;
    }

    h2 {
      ${H1White};
      width: 100%;
      padding-left: 4rem;
    }
  }
  .wrapper {
    ${standardWrapper};
  }
`

const GalleryImage = styled.div`
  width: calc(50% - 4rem);
  margin: 2rem;

  @media (min-width: 768px) {
    width: calc(33.33% - 4rem);
  }
  @media (min-width: 1025px) {
    width: calc(33.33% - 4rem);
  }
`

const Gallery = ({ gallery }) => {
  return (
    <GalleryStyled>
      <div className="gallerTitle">
        <div className="gallerTitle__wrapper">
          <h2 dangerouslySetInnerHTML={{ __html: gallery.title }} />
        </div>
      </div>
      <div className="wrapper">
        {gallery.acf._afr_gall_single_gallery.map((image, index) => {
          return (
            <GalleryImage key={index}>
              <Img
                fluid={image.localFile.childImageSharp.fluid}
                alt={image.alt_text}
              />
            </GalleryImage>
          )
        })}
      </div>
    </GalleryStyled>
  )
}

export default Gallery
