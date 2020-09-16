import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import BGImage from "gatsby-background-image"
import {
  medWrapperMobile,
  colors,
  H1White,
  B1White,
} from "../../../styles/helpers"

const IntroSection = styled.section`
  position: relative;
  margin-top: 5rem;
  margin-bottom: 10rem;
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
    width: 100%;
    margin-bottom: 2.5rem;

    &__imageLeft {
      width: calc(25% - 2.5rem);
      min-height: 30rem;
      margin-right: 2.5rem;

      div {
        width: 100%;
        height: 100%;
      }
    }

    &__content {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;
      width: 50%;
      background-color: ${colors.colorTertiary};

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

    &__imageRight {
      width: calc(25% - 2.5rem);
      min-height: 30rem;
      margin-left: 2.5rem;

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
      top: 75%;
      left: calc(50% - (17.5rem / 2));
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

const Intro = ({ contactIntro }) => {
  return (
    <IntroSection>
      <div className="wrapper">
        <div className="introTop">
          <div className="introTop__imageLeft">
            <BGImage
              tag="div"
              fluid={
                contactIntro.acf._afr_cpit_image_left.localFile.childImageSharp
                  .fluid
              }
            />
          </div>
          <div className="introTop__content">
            <div className="introTop__content--inner">
              <div>
                <h2>{contactIntro.acf._afr_cpit_title}</h2>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: contactIntro.acf._afr_cpit_content,
                }}
              />
            </div>
          </div>
          <div className="introTop__imageRight">
            <BGImage
              tag="div"
              fluid={
                contactIntro.acf._afr_cpit_image_right.localFile.childImageSharp
                  .fluid
              }
            />
          </div>
        </div>
        <div className="introLogo">
          <Img
            fluid={
              contactIntro.acf._afr_cpi_logo.localFile.childImageSharp.fluid
            }
            alt={contactIntro.acf._afr_cpi_logo.alt_text}
          />
        </div>
      </div>
    </IntroSection>
  )
}

export default Intro
