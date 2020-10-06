import React, { useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import {
  medWrapper,
  H2CoolGrey,
  H1DarkGrey,
  B1DarkGrey,
  Btn1DarkGrey,
} from "../../../styles/helpers"

import IconBrush from "../../Icons/IconBrush"
import IconCart from "../../Icons/IconCart"
import IconDesk from "../../Icons/IconDesk"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const HowItWorksSection = styled.section`
  background-color: rgba(244, 212, 210, 0.4);

  .wrapper {
    ${medWrapper};
  }

  .howTitle {
    width: calc(100%);
    margin-bottom: 2.5rem;
    text-align: center;

    h2 {
      ${H2CoolGrey};

      span {
        display: inline-block;
      }
    }
  }

  .howStep {
    width: calc(100%);
    margin: auto;
    margin-bottom: 5rem;

    @media (min-width: 768px) {
      width: calc(33.3333% - 2rem);
      margin: 0 1rem;
    }

    @media (min-width: 1025px) {
      width: calc(33.3333% - 4rem);
      margin: 0 2rem;
    }

    .howStepIcon {
      min-height: 12.5rem;
      margin: auto;

      @media (min-width: 768px) {
        margin: 0;
      }
    }

    h3 {
      ${H1DarkGrey};
      text-align: center;

      @media (min-width: 768px) {
        text-align: left;
      }
    }

    p {
      ${B1DarkGrey};
      text-align: center;

      @media (min-width: 768px) {
        text-align: left;
      }
    }
  }

  .howStepOne {
    .howStepIcon {
      width: 11.57rem;
    }
  }
  .howStepTwo {
    .howStepIcon {
      width: 11.06rem;
    }
  }
  .howStepThree {
    .howStepIcon {
      width: 16.27rem;
    }
  }

  .howLink {
    width: 100%;
    margin-top: 5rem;
    margin-bottom: 2.5rem;
    text-align: center;

    a {
      ${Btn1DarkGrey};
    }
  }
`

const HowItWorks = ({ howItWorks }) => {
  useEffect(() => {
    const triggerElement = document.querySelector("#howItWorksSec")
    const titleLetter = [
      ...triggerElement.querySelectorAll(".howTitle h2 span"),
    ]

    const steps = [...triggerElement.querySelectorAll(".howStep")]
    const howLink = triggerElement.querySelector(".howLink")

    gsap.set(steps, { autoAlpha: 0, y: 150 })
    gsap.set(howLink, { autoAlpha: 0 })
    gsap
      .timeline({
        scrollTrigger: {
          trigger: triggerElement,
          markers: false,
          start: "top 45%",
          toggleActions: "play none none none",
        },
      })
      .to(steps, {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        stagger: {
          each: 0.5,
        },
      })
      .to(howLink, {
        autoAlpha: 1,
        y: 0,
        duration: 2,
        ease: "power4.out",
      })

    gsap.set(titleLetter, { autoAlpha: 0, y: -30 })
    gsap
      .timeline({
        scrollTrigger: {
          trigger: triggerElement,
          markers: false,
          start: "top 45%",
          toggleActions: "play none none none",
        },
      })
      .to(titleLetter, {
        autoAlpha: 1,
        y: 0,
        duration: 0.75,
        ease: "power4.out",
        stagger: {
          each: 0.1,
        },
      })
  }, [])
  const newTitle = "How It Works".split("")
  return (
    <HowItWorksSection id="howItWorksSec">
      <div className="wrapper">
        <div className="howTitle">
          <h2>
            {" "}
            {newTitle.map((letter, index) => {
              return letter !== " " ? <span key={index}>{letter}</span> : " "
            })}
          </h2>
        </div>
        <div className="howStep howStepOne">
          <div className="howStepIcon">
            <IconDesk />
          </div>
          <h3>Step 01</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: howItWorks.acf._afr_hoitwor_step_one,
            }}
          />
        </div>
        <div className="howStep howStepTwo">
          <div className="howStepIcon">
            <IconCart />
          </div>
          <h3>Step 02</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: howItWorks.acf._afr_hoitwor_step_two,
            }}
          />
        </div>
        <div className="howStep howStepThree">
          <div className="howStepIcon">
            <IconBrush />
          </div>
          <h3>Step 03</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: howItWorks.acf._afr_hoitwor_step_three,
            }}
          />
        </div>
        <div className="howLink">
          <Link to="/how-it-works">How It Works</Link>
        </div>
      </div>
    </HowItWorksSection>
  )
}

export default HowItWorks
