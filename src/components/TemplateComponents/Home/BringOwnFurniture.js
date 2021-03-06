import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import {
  standardWrapper,
  colors,
  B2DarkGrey,
  H1DarkGrey,
  Btn1DarkGrey,
} from "../../../styles/helpers"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const BringOwnFurninuteSection = styled.section`
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: ${colors.colorSecondary};
  box-shadow: 0 0.8rem 0.6rem 0 rgba(0, 0, 0, 0.16);

  .wrapper {
    ${standardWrapper};
    flex-direction: column-reverse;
    align-items: center;

    @media (min-width: 768px) {
      flex-direction: row;
      max-width: 80rem;
    }
  }

  .mainContent {
    width: calc(100%);
    text-align: center;

    h2 {
      ${H1DarkGrey};
    }

    p {
      ${B2DarkGrey};

      &:last-of-type {
        margin-bottom: 0;
      }
    }

    .btnContainer {
      margin-top: 2rem;

      a {
        ${Btn1DarkGrey};
      }
    }
  }
`

const BringOwnFurninute = () => {
  return (
    <BringOwnFurninuteSection id="mailchimpSec">
      <div className="wrapper">
        <div className="mainContent">
          <div>
            <h2>Submit a quote for us to refinish a piece you own</h2>
            <p>Bring your Own Furniture</p>
            <div className="btnContainer">
              <a href="https://shop.airdriefurniturerevival.ca/bring-your-own-furniture/">
                Submit Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </BringOwnFurninuteSection>
  )
}

export default BringOwnFurninute
