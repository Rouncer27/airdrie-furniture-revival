import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import BGImage from "gatsby-background-image"
import {
  medWrapper,
  colors,
  H1DarkGrey,
  B1DarkGrey,
} from "../../../styles/helpers"

const IntroSection = styled.section`
  position: relative;
  margin-top: 5rem;
  z-index: 10;

  .wrapper {
    ${medWrapper};
    position: relative;
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
      background-color: ${colors.colorPrimary};

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
      width: calc(25% - 2.5rem);
      min-height: 30rem;
      margin-left: 2.5rem;

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

    &__imageLeft {
      width: calc(25% - 2.5rem);
      margin-right: 2.5rem;
      min-height: 40rem;

      div {
        width: 100%;
        height: 100%;
      }
    }

    &__imageRight {
      width: 75%;
      min-height: 40rem;

      div {
        width: 100%;
        height: 100%;
      }
    }
  }

  .introLogo {
    position: absolute;
    top: 29.5%;
    left: 16.5%;
    width: 20rem;
    height: 20rem;
  }
`

const Intro = ({ aboutIntro }) => {
  return (
    <IntroSection>
      <div className="wrapper">
        <div className="introTop">
          <div className="introTop__imageLeft">
            <BGImage
              tag="div"
              fluid={
                aboutIntro.acf._afr_apit_image_left.localFile.childImageSharp
                  .fluid
              }
            />
          </div>
          <div className="introTop__content">
            <div className="introTop__content--inner">
              <div>
                <h2>{aboutIntro.acf._afr_apit_title}</h2>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: aboutIntro.acf._afr_apit_content,
                }}
              />
            </div>
          </div>
          <div className="introTop__imageRight">
            <BGImage
              tag="div"
              fluid={
                aboutIntro.acf._afr_apit_image_right.localFile.childImageSharp
                  .fluid
              }
            />
          </div>
        </div>
        <div className="introBottom">
          <div className="introBottom__imageLeft">
            <BGImage
              tag="div"
              fluid={
                aboutIntro.acf._afr_apib_image_left.localFile.childImageSharp
                  .fluid
              }
            />
          </div>
          <div className="introBottom__imageRight">
            <BGImage
              tag="div"
              fluid={
                aboutIntro.acf._afr_apib_image_right.localFile.childImageSharp
                  .fluid
              }
            />
          </div>
        </div>
        <div className="introLogo">
          <Img
            fluid={aboutIntro.acf._afr_api_logo.localFile.childImageSharp.fluid}
            alt={aboutIntro.acf._afr_api_logo.alt_text}
          />
        </div>
      </div>
    </IntroSection>
  )
}

export default Intro
