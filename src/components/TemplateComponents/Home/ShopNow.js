import React, { useEffect } from "react"
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
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

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
      bottom: calc(-50%);
      left: calc(50% - (20rem / 2));
      width: 20rem;
      height: 20rem;
      padding: 1rem;
      background-color: ${colors.white};
      box-shadow: 0.6rem 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.16);

      @media (min-width: 450px) {
        bottom: calc(-50% + 10rem);
      }

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
  useEffect(() => {
    const triggerElement = document.querySelector("#showNowSec")
    const shopTitle = triggerElement.querySelector(".shopContent__title")
    const shopPara = triggerElement.querySelector(".shopContent__para")
    const shopLink = triggerElement.querySelector(".shopContent__link")
    const shopChair = triggerElement.querySelector(".closedChair")
    const shopTop = triggerElement.querySelector(".shopImages__top")
    const shopBot = triggerElement.querySelector(".shopImages__bottom")

    gsap.set(shopTop, { autoAlpha: 0, x: 200 })
    gsap.set(shopBot, { autoAlpha: 0, y: 300 })

    gsap.set(shopTitle, { autoAlpha: 0, y: 100 })
    gsap.set(shopPara, { autoAlpha: 0, y: 100 })
    gsap.set(shopLink, { autoAlpha: 0, y: 100 })
    gsap.set(shopChair, { autoAlpha: 0, x: -100 })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: triggerElement,
          markers: false,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      })
      .add("start")
      .to([shopTitle, shopPara, shopLink], {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        stagger: {
          each: 0.25,
        },
      })
      .to(
        [shopChair],
        {
          autoAlpha: 1,
          x: 0,
          duration: 1,
        },
        "-=0.75"
      )
      .to(
        [shopTop, shopBot],
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: 1,
          stagger: {
            each: 0.25,
          },
        },
        "start+=0.5"
      )
  }, [])

  return (
    <ShopNowSection id="showNowSec">
      <div className="wrapper">
        <div className="shopContent">
          <div className="shopContent__title">
            <h2>{shopNow.acf._afr_hosns_title}</h2>
          </div>
          <div
            className="shopContent__para"
            dangerouslySetInnerHTML={{ __html: shopNow.acf._afr_hosns_content }}
          />
          <div className="shopContent__link">
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
