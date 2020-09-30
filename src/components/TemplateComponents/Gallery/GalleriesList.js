import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { B1DarkGrey, medWrapper } from "../../../styles/helpers"
import { Link } from "gatsby"

const GalleriesListStyles = styled.div`
  .wrapper {
    ${medWrapper};
  }
`

const GalleryStyled = styled(Link)`
  width: calc(50% - 4rem);
  margin: 2rem;

  @media (min-width: 768px) {
    width: calc(33.33% - 4rem);
  }
  @media (min-width: 1025px) {
    width: calc(33.33% - 4rem);
  }

  h2 {
    ${B1DarkGrey};
    text-transform: uppercase;
  }
`

const GalleriesList = ({ galleries }) => {
  return (
    <GalleriesListStyles>
      <div className="wrapper">
        {galleries.edges.map(gallery => {
          return (
            <GalleryStyled
              to={`/how-it-works/gallery/${gallery.node.slug}`}
              key={gallery.node.wordpress_id}
            >
              <div>
                <h2>{gallery.node.title}</h2>
              </div>
              <div>
                <Img
                  fluid={
                    gallery.node.acf._afr_gall_single_image.localFile
                      .childImageSharp.fluid
                  }
                  alt={gallery.node.title}
                />
              </div>
            </GalleryStyled>
          )
        })}
      </div>
    </GalleriesListStyles>
  )
}

export default GalleriesList
