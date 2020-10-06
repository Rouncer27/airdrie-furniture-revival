import React, { useEffect } from "react"
import styled from "styled-components"
import BGImg from "gatsby-background-image"
import { medWrapper, B2DarkGrey } from "../../../styles/helpers"
import IconOpen from "../../Icons/IconOpen"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const IntroSection = styled.section`
  padding-top: 1rem;

  @media (min-width: 768px) {
    padding-top: 5rem;
  }

  .wrapper {
    ${medWrapper};
  }

  .introImages {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    min-height: 30rem;

    @media (min-width: 768px) {
      min-height: 30rem;
    }

    &__left {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;
      width: calc(100% - 2.5rem);
      margin-right: 2.5rem;
      margin-bottom: 2rem;
      height: 25rem;

      @media (min-width: 768px) {
        width: calc(25%);
        height: 100%;
        margin-right: 0;
        margin-bottom: 0;
      }

      @media (min-width: 1025px) {
        width: calc(25%);
      }

      &--inner {
        width: 25rem;
        margin: auto;
      }
    }

    &__center {
      width: calc(100%);
      height: 30rem;

      @media (min-width: 768px) {
        width: calc(50% - 5rem);
        height: 100%;
        margin: auto 2.5rem;
      }

      @media (min-width: 1025px) {
        width: calc(50% - 5rem);
      }

      div {
        width: 100%;
        height: 100%;
      }
    }

    &__right {
      display: none;

      @media (min-width: 768px) {
        display: block;
        width: calc(25%);
        height: 100%;
      }

      div {
        width: 100%;
        height: 100%;
      }
    }
  }

  .introContent {
    width: 100%;
    max-width: 62rem;
    margin: 5rem auto 2.5rem;
    text-align: center;

    p {
      ${B2DarkGrey};
    }
  }
`

const Intro = ({ intro }) => {
  useEffect(() => {
    const triggerElement = document.querySelector("#howIntro")
    const openIcon = triggerElement.querySelector(".introImages__left--inner")

    gsap.set(openIcon, { transformOrigin: "top center", rotation: "10deg" })

    gsap
      .timeline({ repeat: -1, yoyo: true })
      .to(openIcon, { duration: 2.5, rotation: "-15deg", ease: "power1.inOut" })
  }, [])
  return (
    <IntroSection id="howIntro">
      <div className="wrapper">
        <div className="introImages">
          <div className="introImages__left">
            <div className="introImages__left--inner">
              <IconOpen />
            </div>
          </div>
          <div className="introImages__center">
            <BGImg
              tag="div"
              fluid={
                intro.acf._afr_htw_intro_image_centre.localFile.childImageSharp
                  .fluid
              }
            />
          </div>
          <div className="introImages__right">
            <BGImg
              tag="div"
              fluid={
                intro.acf._afr_htw_intro_image_right.localFile.childImageSharp
                  .fluid
              }
            />
          </div>
        </div>
        <div className="introContent">
          <div
            dangerouslySetInnerHTML={{
              __html: intro.acf._afr_htw_intro_content,
            }}
          />
        </div>
      </div>
    </IntroSection>
  )
}

export default Intro
