import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import BGImage from "gatsby-background-image"
import {
  medWrapperMobile,
  colors,
  H1DarkGrey,
  B1DarkGrey,
  H1White,
  B1White,
} from "../../../styles/helpers"

const IntroSection = styled.section`
  position: relative;
  margin-top: 5rem;
  z-index: 10;

  .wrapper {
    ${medWrapperMobile};
    position: relative;
    padding: 0;
  }

  .introTop {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column-reverse;
    width: 100%;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    @media (min-width: 1025px) {
      margin-bottom: 2.5rem;
    }

    &__imageLeft {
      width: calc(100%);
      min-height: 30rem;

      @media (min-width: 768px) {
        width: calc(33.33%);
      }

      @media (min-width: 1025px) {
        width: calc(25% - 2.5rem);
        margin-right: 2.5rem;
      }

      div {
        width: 100% !important;
        height: 100% !important;
        min-height: 30rem;
        opacity: 1 !important;
      }
    }

    &__content {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;
      width: calc(100%);
      background-color: ${colors.colorPrimary};

      @media (min-width: 768px) {
        width: 66.66%;
      }

      @media (min-width: 1025px) {
        width: 50%;
      }

      &--inner {
        width: 100%;
        padding: 2rem 5rem;

        h2 {
          ${H1DarkGrey};
        }

        p {
          ${B1DarkGrey};
        }
      }
    }

    &__imageRight {
      display: none;
      width: calc(25% - 2.5rem);
      min-height: 30rem;
      margin-left: 2.5rem;

      @media (min-width: 1025px) {
        display: block;
      }

      div {
        width: 100%;
        height: 100%;
      }
    }
  }

  .introBottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    &__content {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;
      width: calc(100%);
      background-color: ${colors.colorTertiary};

      @media (min-width: 768px) {
        width: calc(33.33%);
      }

      @media (min-width: 1025px) {
        width: calc(25% - 2.5rem);
        margin-right: 2.5rem;
      }

      &--inner {
        width: 100%;
        padding: 2rem 5rem;

        h2 {
          ${H1White};
        }

        p {
          ${B1White};
        }
      }
    }

    &__image {
      width: 100%;
      min-height: 30rem;

      @media (min-width: 768px) {
        width: 66.66%;
        min-height: 40rem;
      }

      @media (min-width: 1025px) {
        width: 75%;
      }

      div {
        width: 100%;
        height: 100%;
      }
    }
  }

  .introLogo {
    display: none;
    position: absolute;
    top: 29.5%;
    left: 16.5%;
    width: 20rem;
    height: 20rem;

    @media (min-width: 768px) {
      display: block;
      top: 29.5%;
      left: calc(33.33% - (17.5rem / 2));
      width: 17.5rem;
      height: 17.5rem;
    }

    @media (min-width: 1025px) {
      top: 29.5%;
      left: 16.5%;
      width: 20rem;
      height: 20rem;
    }
  }
`

const Intro = ({ homeIntro }) => {
  return (
    <IntroSection>
      <div className="wrapper">
        <div className="introTop">
          <div className="introTop__imageLeft">
            <BGImage
              tag="div"
              fluid={
                homeIntro.acf._afr_hpit_image_left.localFile.childImageSharp
                  .fluid
              }
            />
          </div>
          <div className="introTop__content">
            <div className="introTop__content--inner">
              <div>
                <h2>{homeIntro.acf._afr_hpit_title}</h2>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: homeIntro.acf._afr_hpit_content,
                }}
              />
            </div>
          </div>
          <div className="introTop__imageRight">
            <BGImage
              tag="div"
              fluid={
                homeIntro.acf._afr_hpit_image_right.localFile.childImageSharp
                  .fluid
              }
            />
          </div>
        </div>
        <div className="introBottom">
          <div className="introBottom__content">
            <div className="introBottom__content--inner">
              <div>
                <h2>{homeIntro.acf._afr_hpib_title}</h2>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: homeIntro.acf._afr_hpib_content,
                }}
              />
            </div>
          </div>
          <div className="introBottom__image">
            <BGImage
              tag="div"
              fluid={
                homeIntro.acf._afr_hpib_image.localFile.childImageSharp.fluid
              }
            />
          </div>
        </div>
        <div className="introLogo">
          <Img
            fluid={homeIntro.acf._afr_hpi_logo.localFile.childImageSharp.fluid}
            alt={homeIntro.acf._afr_hpi_logo.alt_text}
          />
        </div>
      </div>
    </IntroSection>
  )
}

export default Intro
