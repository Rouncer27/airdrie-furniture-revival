import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import BGImage from "gatsby-background-image"

import Chair from "../../ClosedCropped/Chair"
import {
  medWrapper,
  colors,
  H2CoolGrey,
  B2DarkGrey,
  Btn1DarkGrey,
} from "../../../styles/helpers"

const ShopNowSection = styled.section`
  position: relative;
  padding-top: 7.5rem;
  padding-bottom: 45rem;

  @media (min-width: 768px) {
    padding-bottom: 35rem;
  }

  .wrapper {
    ${medWrapper};
  }

  .closedChair {
    position: absolute;
    bottom: -5rem;
    left: calc(50% - ((38.5rem / 1.5) / 2));
    width: calc(38.5rem / 1.5);
    height: calc(55.7rem / 1.5);

    @media (min-width: 768px) {
      bottom: -7.5rem;
      left: -5rem;
      width: calc(38.5rem / 1.25);
      height: calc(55.7rem / 1.25);
    }

    @media (min-width: 1025px) {
      bottom: -5rem;
      left: -10rem;
      width: calc(38.5rem);
      height: calc(55.7rem);
    }
  }

  .shopContent {
    width: calc(100%);
    max-width: 44rem;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 5rem;
    text-align: center;

    @media (min-width: 768px) {
      width: calc(60% - 10rem);
      margin-right: 10rem;
      margin-bottom: 0;
    }

    @media (min-width: 1025px) {
      width: calc(50% - 10rem);
    }

    h2 {
      ${H2CoolGrey};
    }

    p {
      ${B2DarkGrey};
    }

    a {
      ${Btn1DarkGrey};
    }
  }

  .shopImages {
    position: relative;
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(40%);
    }

    @media (min-width: 1025px) {
      width: calc(50%);
    }

    &__bottom {
      position: absolute;
      bottom: calc(-50% + 10rem);
      left: calc(50% - (20rem / 2));
      width: 20rem;
      height: 20rem;
      padding: 1rem;
      background-color: ${colors.white};
      box-shadow: 0.6rem 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.16);

      @media (min-width: 768px) {
        bottom: calc(-45%);
        left: calc(50% - (25rem / 2));
        width: 25rem;
        height: 25rem;
      }

      @media (min-width: 1025px) {
        bottom: -50%;
        left: -25%;
        width: 35rem;
        height: 35rem;
      }

      div {
        width: 100%;
        height: 100%;
      }
    }
  }
`

const ShopNow = ({ shopNow }) => {
  return (
    <ShopNowSection>
      <div className="wrapper">
        <div className="shopContent">
          <div>
            <h2>{shopNow.acf._afr_hosns_title}</h2>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: shopNow.acf._afr_hosns_content }}
          />
          <div>
            <a href={shopNow.acf._afr_hosns_link_url}>Shop Now</a>
          </div>
        </div>

        <div className="shopImages">
          <div className="shopImages__top">
            <Img
              fluid={
                shopNow.acf._afr_hosns_image_top.localFile.childImageSharp.fluid
              }
              alt={shopNow.acf._afr_hosns_image_top.alt_text}
            />
          </div>
          <div className="shopImages__bottom">
            <BGImage
              tag="div"
              fluid={
                shopNow.acf._afr_hosns_image_bottom.localFile.childImageSharp
                  .fluid
              }
            />
          </div>
        </div>
      </div>
      <div className="closedChair">
        <Chair />
      </div>
    </ShopNowSection>
  )
}

export default ShopNow
