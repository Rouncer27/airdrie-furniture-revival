import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import {
  standardWrapper,
  colors,
  H1White,
  B1White,
} from "../../../styles/helpers"

const IntroSection = styled.section`
  margin-top: 5rem;
  padding: 5rem 0;
  background-color: ${colors.colorTertiary};

  .wrapper {
    ${standardWrapper};
    align-items: flex-start;
  }

  .introContent {
    width: calc(100%);
    padding: 2rem 4rem;

    @media (min-width: 768px) {
      width: calc(66.66%);
      padding: 2rem 4rem;
    }

    h2 {
      ${H1White};
      margin-top: 0;
      margin-bottom: 4rem;
    }

    p {
      ${B1White};
    }
  }

  .introImage {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(33.33%);
    }
  }
`

const Intro = ({ intro }) => {
  return (
    <IntroSection>
      <div className="wrapper">
        <div className="introContent">
          <div>
            <h2>{intro.acf._afr_faqs_intro_title}</h2>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: intro.acf._afr_faqs_intro_content,
            }}
          />
        </div>
        <div className="introImage">
          <Img
            fluid={
              intro.acf._afr_faqs_intro_image.localFile.childImageSharp.fluid
            }
            alt={intro.acf._afr_faqs_intro_image.alt_text}
          />
        </div>
      </div>
    </IntroSection>
  )
}

export default Intro
