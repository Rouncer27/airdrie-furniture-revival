import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import {
  Btn1DarkGrey,
  colors,
  H1White,
  standardWrapper,
  fonts,
  fontSizer,
} from "../../../styles/helpers"
import { Link } from "gatsby"
import GallerySlider from "./GallerySlider"

const GalleryStyled = styled.section`
  margin-top: 7.5rem;

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

  .galleryLinks {
    padding: 2rem 0 5rem;
    &__wrapper {
      ${standardWrapper};
    }

    a {
      ${Btn1DarkGrey};
      margin: 2rem;

      @media (min-width: 768px) {
        margin: auto 2rem;
      }
    }
  }
`

const GalleryImage = styled.div`
  position: relative;
  overflow: hidden;
  width: calc(50% - 4rem);
  margin: 2rem;

  @media (min-width: 768px) {
    width: calc(33.33% - 4rem);
  }
  @media (min-width: 1025px) {
    width: calc(33.33% - 4rem);
  }

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
    cursor: pointer;
    &::before {
      transform: translate(-50%, -50%);
    }
    &::after {
      opacity: 1;
    }
  }
`

const Gallery = ({ gallery }) => {
  const [isSliderActive, setIsSliderActive] = useState(false)
  const [clikcedImage, setClikcedImage] = useState(0)
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
            <GalleryImage
              key={index}
              onClick={() => {
                setIsSliderActive(true)
                setClikcedImage(index)
              }}
            >
              <Img
                fluid={image.localFile.childImageSharp.fluid}
                alt={image.alt_text}
              />
            </GalleryImage>
          )
        })}
      </div>
      <div className="galleryLinks">
        <div className="galleryLinks__wrapper">
          <Link to={`/gallery`}>Back to Gallery</Link>
          <a href="https://shop.airdriefurniturerevival.ca/">Shop Now</a>
        </div>
      </div>
      {isSliderActive && (
        <GallerySlider
          images={gallery.acf._afr_gall_single_gallery}
          setIsSliderActive={setIsSliderActive}
          clikcedImage={clikcedImage}
        />
      )}
    </GalleryStyled>
  )
}

export default Gallery
