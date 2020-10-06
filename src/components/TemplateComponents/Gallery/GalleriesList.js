import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import {
  B1DarkGrey,
  fonts,
  medWrapper,
  colors,
  fontSizer,
} from "../../../styles/helpers"
import { Link } from "gatsby"

const GalleriesListStyles = styled.div`
  .wrapper {
    ${medWrapper};
  }
`

const GalleryStyled = styled(Link)`
  position: relative;
  width: calc(100% - 4rem);
  margin: 2rem;
  overflow: hidden;

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
  .imageGalList {
    position: relative;

    &::before {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transition: all 0.4s ease-out;
      transform: translate(500%, -50%);
      color: ${colors.white};
      font-family: ${fonts.fontAwesome};
      font-size: ${fontSizer(3, 5, 76.8, 150, 7)};
      content: "\f002";
      z-index: 10;
    }

    &::after {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: all 0.25s ease-out;
      background-color: rgba(238, 157, 134, 0.5);
      content: "";
      opacity: 0;
    }

    &:hover {
      &::before {
        transform: translate(-50%, -50%);
      }
      &::after {
        opacity: 1;
      }
    }
  }
`

const GalleriesList = ({ galleries }) => {
  return (
    <GalleriesListStyles>
      <div className="wrapper">
        {galleries.edges.map(gallery => {
          return (
            <GalleryStyled
              to={`/gallery/${gallery.node.slug}`}
              key={gallery.node.wordpress_id}
            >
              <div>
                <h2>{gallery.node.title}</h2>
              </div>
              <div className="imageGalList">
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
