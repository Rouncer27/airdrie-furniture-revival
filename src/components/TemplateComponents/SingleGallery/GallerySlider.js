import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { colors } from "../../../styles/helpers"

const settings = {
  fade: false,
  draggable: true,
  infinite: true,
  speed: 250,
  centerMode: true,
  centerPadding: "0",
  arrows: true,
  dots: false,
}

const GallerySliderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999999;

  .backgroundColor {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: -1;
  }

  .slideWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 70rem;
    margin: auto;
  }

  .imageSlider {
    width: 100%;

    .slick-track {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .slick-arrow {
      top: 105%;
      width: 4rem;
      height: 4rem;

      @media (min-width: 768px) {
        top: 50%;
      }

      &::before {
        transition: 0.3s all ease-in;
        font-size: 4rem;
        color: ${colors.colorPrimary};
        opacity: 1;
      }

      &:hover {
        &::before {
          color: ${colors.colorAccent};
        }
      }
    }

    .slick-arrow.slick-prev {
      left: 15rem;

      @media (min-width: 768px) {
        left: -7rem;
      }
    }

    .slick-arrow.slick-next {
      right: 15rem;

      @media (min-width: 768px) {
        right: -7rem;
      }
    }
  }

  .imageWrap {
    width: 100%;
    border: 1rem solid ${colors.white};
  }

  .closeBtn {
    position: absolute;
    top: 5rem;
    right: 5rem;

    button {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      cursor: pointer;
      transition: all ease-in 0.3s;
      background-color: ${colors.colorPrimary};
      border: 0.25rem solid ${colors.white};
      color: ${colors.white};
      font-weight: bold;

      &:hover {
        background-color: ${colors.colorSecondary};
        border: 0.25rem solid ${colors.colorAccent};
        color: ${colors.colorAccent};
      }
    }
  }
`

const GallerySlider = ({ setIsSliderActive, clikcedImage, images }) => {
  return (
    <GallerySliderStyled>
      <div className="slideWrapper">
        <Slider
          {...settings}
          initialSlide={clikcedImage}
          className="imageSlider"
        >
          {images.map((img, index) => {
            return (
              <div key={index} className="imageWrap">
                <Img
                  fluid={img.localFile.childImageSharp.fluid}
                  alt={img.alt_text}
                />
              </div>
            )
          })}
        </Slider>
      </div>
      <div className="closeBtn">
        <button onClick={() => setIsSliderActive(false)}>&#9747;</button>
      </div>
      <div
        className="backgroundColor"
        onClick={() => setIsSliderActive(false)}
      />
    </GallerySliderStyled>
  )
}

export default GallerySlider
