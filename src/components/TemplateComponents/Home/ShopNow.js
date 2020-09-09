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
  padding-bottom: 35rem;

  .wrapper {
    ${medWrapper};
  }

  .closedChair {
    position: absolute;
    bottom: -5rem;
    left: -10rem;
    width: 38.5rem;
    height: 55.7rem;
  }

  .shopContent {
    width: calc(50% - 10rem);
    max-width: 44rem;
    margin-right: 10rem;
    margin-left: auto;
    text-align: center;

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
    width: calc(50%);

    &__bottom {
      position: absolute;
      bottom: -50%;
      left: -25%;
      width: 35rem;
      height: 35rem;
      padding: 1rem;
      background-color: ${colors.white};
      box-shadow: 0.6rem 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.16);

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
