import React, { useEffect } from "react"
import styled from "styled-components"
import HeaderNav from "./HeaderNav"
import HeaderLogo from "./HeaderLogo"
import { medWrapper } from "../../styles/helpers"

import Horse from "../ClosedCropped/Horse"
import Flowers from "../ClosedCropped/Flowers"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const HeaderStyled = styled.header`
  position: relative;
  z-index: 999999;

  .headerWrap {
    ${medWrapper};
    align-items: center;
  }

  .horseGraphic {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 31.25rem;
    height: 32.05rem;
    z-index: -1;

    @media (min-width: 768px) {
      display: block;
      top: 0;
      left: 1vw;
      width: calc(31.25rem / 1.5);
      height: calc(32.05rem / 1.5);
    }

    @media (min-width: 1025px) {
      top: 0;
      left: -5rem;
      width: calc(31.25rem / 1.1);
      height: calc(32.05rem / 1.1);
    }

    @media (min-width: 1200px) {
      top: 0;
      left: 0;
      width: calc(31.25rem);
      height: calc(32.05rem);
    }

    @media (min-width: 1500px) {
      top: 0;
      left: 3vw;
      width: calc(31.25rem);
      height: calc(32.05rem);
    }
  }

  .flowersGraphic {
    display: none;
    position: absolute;
    top: -1rem;
    right: 0;
    width: calc(46.14rem / 2);
    height: calc(29.35rem / 2);
    z-index: -1;

    @media (min-width: 768px) {
      display: block;
      width: calc(46.14rem / 2);
      height: calc(29.35rem / 2);
    }

    @media (min-width: 1025px) {
      right: 0;
      width: calc(46.14rem / 1.5);
      height: calc(29.35rem / 1.5);
    }

    @media (min-width: 1200px) {
      right: 0;
      width: calc(46.14rem / 1.2);
      height: calc(29.35rem / 1.2);
    }
    @media (min-width: 1500px) {
      right: 0;
      width: calc(46.14rem);
      height: calc(29.35rem);
    }
  }
`

const Header = ({ siteTitle, location }) => {
  useEffect(() => {
    const triggerElement = document.querySelector("#headerSection")
    const horseGraphic = triggerElement.querySelector(".horseGraphic")
    const flowerGraphic = triggerElement.querySelector(".flowersGraphic")
    if (location.pathname === "/") {
      gsap.set(horseGraphic, {
        autoAlpha: 1,
        y: -235,
        x: 10,
        rotate: "-30deg",
        transformOrigin: "center top",
      })
      gsap.set(flowerGraphic, {
        autoAlpha: 0,
        y: 0,
        x: 300,
        transformOrigin: "center top",
      })

      gsap
        .timeline({
          scrollTrigger: {
            trigger: triggerElement,
            markers: false,
            start: "top 100%",
            toggleActions: "play none none none",
          },
        })
        .add("start")
        .to(
          horseGraphic,
          {
            autoAlpha: 1,
            y: -50,
            x: 0,
            rotate: "0deg",
            duration: 2,
            ease: "back.out(1.7)",
          },
          "start"
        )
        .to(horseGraphic, {
          y: 0,
          x: 0,
          rotate: "0deg",
          duration: 1.75,
          ease: "power2.out",
        })
        .to(
          flowerGraphic,
          {
            autoAlpha: 1,
            y: 0,
            x: 0,
            duration: 1,
            ease: "power2.out",
          },
          "start"
        )
    }

    // gsap
    //   .timeline({
    //     scrollTrigger: {
    //       trigger: triggerElement,
    //       markers: true,
    //       start: "top 0%",
    //       end: "top -100%",
    //       scrub: true,
    //       toggleActions: "play none none none",
    //     },
    //   })
    //   .add("start")
    //   .to(
    //     flowerGraphic,
    //     {
    //       x: 300,
    //       duration: 1,
    //       ease: "power2.out",
    //     },
    //     "start"
    //   )
    //   .to(
    //     horseGraphic,
    //     {
    //       y: -235,
    //       duration: 1,
    //       ease: "power2.out",
    //     },
    //     "start"
    //   )
  }, [])
  return (
    <HeaderStyled id="headerSection">
      <div className="headerWrap">
        <HeaderLogo siteTitle={siteTitle} />
        <HeaderNav location={location} />
      </div>
      <div className="horseGraphic">
        <Horse />
      </div>
      <div className="flowersGraphic">
        <Flowers />
      </div>
    </HeaderStyled>
  )
}

export default Header
