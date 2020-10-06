import React, { useEffect, useRef } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import {
  H2DarkGrey,
  H1DarkGrey,
  B1DarkGrey,
  colors,
} from "../../../styles/helpers"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const StepStyled = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column-reverse;
  position: relative;
  width: 100%;
  padding-bottom: 5rem;

  @media (min-width: 768px) {
    flex-direction: ${props => (props.reversed ? "row-reverse" : "row")};
    padding-bottom: 15rem;
  }

  .stepContent {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(40%);
    }

    h2 {
      ${H1DarkGrey};
      margin-top: 0;

      span {
        display: inline-block;
      }
    }

    p {
      ${B1DarkGrey};
    }

    a {
      ${B1DarkGrey};
      color: ${colors.colorTertiary};
      font-weight: bold;

      &:hover {
        color: ${colors.colorSecondary};
      }
    }
  }

  .stepCount {
    width: calc(100%);
    margin-top: 5rem;

    @media (min-width: 768px) {
      width: calc(20%);
      margin-top: 0;
      text-align: center;
    }

    p {
      ${H2DarkGrey};
      font-weight: bold;
      text-transform: uppercase;

      span {
        display: block;
      }
    }
  }

  .stepIcon {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(40%);
    }

    &__inner {
      width: 20rem;
      margin: 0;

      @media (min-width: 768px) {
        width: 30rem;
        margin: auto;
      }
    }
  }

  .stepDots {
    display: ${props => (props.last ? "none" : "none")};
    position: absolute;
    left: 0;
    right: 0;
    bottom: 6rem;
    width: 0.1rem;
    height: 50%;
    margin: auto;
    border-right: dotted 0.5rem ${colors.colorTertiary};

    @media (min-width: 768px) {
      display: ${props => (props.last ? "none" : "block")};
    }
  }
`

const Step = ({ index, step, reversed, stepsLength }) => {
  const last = index + 1 === stepsLength ? true : false
  const triggerElement = useRef(null)

  useEffect(() => {
    const stepTitle = [
      ...triggerElement.current.querySelectorAll(".stepTitle h2 span"),
    ]
    const stepContent = triggerElement.current.querySelector(".stepPara")
    const stepIcon = triggerElement.current.querySelector(".stepIcon__inner")

    gsap.set(stepTitle, { autoAlpha: 0, y: -30 })
    gsap.set(stepContent, { autoAlpha: 0, y: 50 })
    gsap.set(stepIcon, { autoAlpha: 0, x: reversed ? -50 : 50 })
    gsap
      .timeline({
        scrollTrigger: {
          trigger: triggerElement.current,
          markers: false,
          start: "top 45%",
          toggleActions: "play none none none",
        },
      })
      .add("start")
      .to(stepTitle, {
        autoAlpha: 1,
        y: 0,
        duration: 0.75,
        ease: "power4.out",
        stagger: {
          each: 0.1,
        },
      })
      .to(stepContent, { autoAlpha: 1, y: 0 }, "start+=.5")
      .to(stepIcon, { autoAlpha: 1, x: 0 }, "start")
  }, [])

  const newTitle = step.title.split("")

  return (
    <StepStyled
      ref={triggerElement}
      key={index}
      reversed={reversed}
      last={last}
    >
      <div className="stepContent">
        <div className="stepTitle">
          <h2>
            {newTitle.map((letter, index) => {
              return letter !== " " ? <span key={index}>{letter}</span> : " "
            })}
          </h2>
        </div>
        <div
          className="stepPara"
          dangerouslySetInnerHTML={{ __html: step.content }}
        />
      </div>
      <div className="stepCount">
        <p>
          Step <span>0{index + 1}</span>
        </p>
      </div>
      <div className="stepIcon">
        <div className="stepIcon__inner">
          <Img
            fluid={step.icon.localFile.childImageSharp.fluid}
            alt={`Step One`}
          />
        </div>
      </div>
      <div className="stepDots" />
    </StepStyled>
  )
}

export default Step
