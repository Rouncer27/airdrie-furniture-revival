import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import {
  H1DarkGrey,
  B1DarkGrey,
  medWrapper,
  Btn1DarkGrey,
} from "../../../styles/helpers"

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

    &__item {
      padding-bottom: 1rem;

      &--title {
        h2 {
          ${H1DarkGrey};
        }
      }

      &--wysiwyg {
        p {
          ${B1DarkGrey};
          margin-bottom: 1.6rem;
        }
      }
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

const Points = ({ points }) => {
  return (
    <PointsSection>
      <div className="wrapper">
        <div className="pointsSec">
          {points.acf._afr_byof_info_points.map((point, index) => {
            return (
              <div className="pointsSec__item" key={index}>
                <div className="pointsSec__item--title">
                  <h2>{point.title}</h2>
                </div>
                <div
                  className="pointsSec__item--wysiwyg"
                  dangerouslySetInnerHTML={{ __html: point.content }}
                />
              </div>
            )
          })}
        </div>
        <div className="pointsSide">
          <div className="pointsSide__image">
            <Img
              fluid={
                points.acf._afr_byof_info_side_image.localFile.childImageSharp
                  .fluid
              }
              alt={points.acf._afr_byof_info_side_image.alt_text}
            />
          </div>
          <div className="pointsSide__title">
            <h3>Ready to customize your own piece?</h3>
          </div>
          <div className="pointsSide__link">
            <a href="https://shop.airdriefurniturerevival.ca/bring-your-own-furniture/">
              Submit a quote request
            </a>
          </div>
        </div>
      </div>
    </PointsSection>
  )
}

export default Points
