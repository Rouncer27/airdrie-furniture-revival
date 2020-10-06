import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { H1DarkGrey, medWrapper, Btn1DarkGrey } from "../../../styles/helpers"

import Faq from "./Faq"

const PointsSection = styled.section`
  padding-top: 5rem;
  padding-bottom: 5rem;

  .wrapper {
    ${medWrapper};
    flex-direction: row-reverse;
  }

  .pointsSec {
    width: calc(100%);
    @media (min-width: 768px) {
      width: calc(65%);
    }
  }

  .pointsSide {
    width: calc(100%);
    @media (min-width: 768px) {
      width: calc(35% - 10rem);
      margin-right: 10rem;
    }

    &__title {
      margin-bottom: 5rem;

      h3 {
        ${H1DarkGrey};
      }
    }

    &__link {
      a {
        ${Btn1DarkGrey};
      }
    }
  }
`

const Faqs = ({ faqs }) => {
  return (
    <PointsSection>
      <div className="wrapper">
        <div className="pointsSec">
          {faqs.acf._afr_faqs_info_points.map((point, index) => {
            return <Faq key={index} point={point} />
          })}
        </div>
        <div className="pointsSide">
          <div className="pointsSide__image">
            <Img
              fluid={
                faqs.acf._afr_faqs_info_side_image.localFile.childImageSharp
                  .fluid
              }
              alt={faqs.acf._afr_faqs_info_side_image.alt_text}
            />
          </div>
          <div className="pointsSide__title">
            <h3>Check out what's waiting for you</h3>
          </div>
          <div className="pointsSide__link">
            <a href="https://shop.airdriefurniturerevival.ca/">Shop Now</a>
          </div>
        </div>
      </div>
    </PointsSection>
  )
}

export default Faqs
