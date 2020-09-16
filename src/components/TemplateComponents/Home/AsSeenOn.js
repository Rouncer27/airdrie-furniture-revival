import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { medWrapper, H2CoolGrey } from "../../../styles/helpers"
import PaintBrush from "../../ClosedCropped/PaintBrush"

const AsSeenOnSection = styled.section`
  position: relative;
  padding: 3rem 0;
  background-color: rgba(244, 212, 210, 0.8);

  .wrapper {
    ${medWrapper};
    position: relative;
    align-items: center;
    z-index: 5;
  }

  .asSeenTitle {
    width: calc(100%);
    text-align: center;

    @media (min-width: 768px) {
      width: calc(100%);
    }

    @media (min-width: 1025px) {
      width: calc(20%);
      text-align: left;
    }

    h2 {
      ${H2CoolGrey};
    }
  }
  .asSeenLogos {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(100%);
    }

    @media (min-width: 1025px) {
      width: calc(80% - 5rem);
      margin-right: 5rem;
    }

    &__logo {
      width: calc(33.33% - 2em);
      margin: 1rem;

      @media (min-width: 768px) {
        width: calc(16.66% - 2em);
        margin: 0 1rem;
      }

      @media (min-width: 1025px) {
        width: calc(16.66% - 2em);
      }
    }
  }

  .closedBrush {
    display: none;
    position: absolute;
    top: 50%;
    right: -2.5rem;
    width: 38.7rem;
    transform: translateY(-50%);
    z-index: 1;

    @media (min-width: 768px) {
      display: block;
      transform: translateY(-10%);
    }

    @media (min-width: 1025px) {
      transform: translateY(-50%);
    }
  }
`

const AsSeenOn = ({ asSeenOn }) => {
  return (
    <AsSeenOnSection>
      <div className="wrapper">
        <div className="asSeenTitle">
          <h2>As Seen On...</h2>
        </div>
        <div className="asSeenLogos">
          {asSeenOn.acf._afr_hoasnn_logos.map((logo, index) => {
            return (
              <div className="asSeenLogos__logo" key={index}>
                <Img
                  fluid={logo.logo.localFile.childImageSharp.fluid}
                  alt={logo.logo.alt_text}
                />
              </div>
            )
          })}
        </div>
      </div>
      <div className="closedBrush">
        <PaintBrush />
      </div>
    </AsSeenOnSection>
  )
}

export default AsSeenOn
