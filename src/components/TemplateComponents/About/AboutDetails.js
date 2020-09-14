import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { medWrapper, B2CoolGrey, B1DarkGrey } from "../../../styles/helpers"

import GreenPaint from "../../ClosedCropped/GreenPaint"

const AboutDetailsSection = styled.div`
  .wrapper {
    ${medWrapper};
  }

  .bioQuote {
    position: relative;
    width: 100%;
    max-width: 96.2rem;
    margin: 2rem auto 2rem;
    padding-bottom: 10rem;
    text-align: center;

    p {
      ${B2CoolGrey};
    }

    &__graphic {
      position: absolute;
      bottom: 0;
      right: -20rem;
      width: 47.5rem;
      height: 10.4rem;
      z-index: -1;
    }
  }

  .bioContent {
    width: 100%;

    &__inner {
      column-count: 2;
      column-gap: 5rem;

      p {
        ${B1DarkGrey};
      }
    }
  }

  .bioImages {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    &__image {
      width: calc(33.33% - 1rem);
    }

    &__image:nth-of-type(1) {
      margin-right: 1rem;
    }
    &__image:nth-of-type(2) {
      margin-right: 0.5rem;
      margin-left: 0.5rem;
    }
    &__image:nth-of-type(3) {
      margin-left: 1rem;
    }
  }
`

const AboutDetails = ({ aboutDetails }) => {
  return (
    <AboutDetailsSection>
      <div className="wrapper">
        <div className="bioQuote">
          <p>{aboutDetails.acf._afr_about_bio_quote}</p>
          <div className="bioQuote__graphic">
            <GreenPaint />
          </div>
        </div>
        <div className="bioContent">
          <div
            className="bioContent__inner"
            dangerouslySetInnerHTML={{
              __html: aboutDetails.acf._afr_about_bio_content,
            }}
          />
        </div>
        <div className="bioImages">
          <div className="bioImages__image">
            <Img
              fluid={
                aboutDetails.acf._afr_about_bio_image_left.localFile
                  .childImageSharp.fluid
              }
              alt={aboutDetails.acf._afr_about_bio_image_left.alt_text}
            />
          </div>
          <div className="bioImages__image">
            <Img
              fluid={
                aboutDetails.acf._afr_about_bio_image_centre.localFile
                  .childImageSharp.fluid
              }
              alt={aboutDetails.acf._afr_about_bio_image_centre.alt_text}
            />
          </div>
          <div className="bioImages__image">
            <Img
              fluid={
                aboutDetails.acf._afr_about_bio_image_right.localFile
                  .childImageSharp.fluid
              }
              alt={aboutDetails.acf._afr_about_bio_image_right.alt_text}
            />
          </div>
        </div>
      </div>
    </AboutDetailsSection>
  )
}

export default AboutDetails