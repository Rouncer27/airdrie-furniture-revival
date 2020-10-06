import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { H1DarkGrey, B1DarkGrey } from "../../../styles/helpers"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const FaqStyled = styled.div`
  padding-bottom: 1rem;

  .itemTitle {
    h2 {
      ${H1DarkGrey};
      span {
        display: inline-block;
      }
    }

    .deskTitle {
      display: none;

      @media (min-width: 768px) {
        display: block;
      }
    }
    .mobileTitle {
      display: block;

      @media (min-width: 768px) {
        display: none;
      }
    }
  }

  .itemWysiwyg {
    p {
      ${B1DarkGrey};
    }
  }
`

const Faq = ({ point }) => {
  const triggerElement = useRef(null)

  useEffect(() => {
    const faqTitle = [
      ...triggerElement.current.querySelectorAll(".itemTitle h2 span"),
    ]
    const faqMobileTitle = triggerElement.current.querySelector(
      ".itemTitle .mobileTitle"
    )

    const faqContent = triggerElement.current.querySelector(".itemWysiwyg")

    gsap.set(faqTitle, { autoAlpha: 0, y: -30 })
    gsap.set(faqMobileTitle, { autoAlpha: 0, y: 30 })
    gsap.set(faqContent, { autoAlpha: 0, y: 50 })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: triggerElement.current,
          markers: false,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      })
      .add("start")
      .to(faqTitle, {
        autoAlpha: 1,
        y: 0,
        ease: "power4.out",
        stagger: {
          amount: 1,
        },
      })
      .to(
        faqMobileTitle,
        { autoAlpha: 1, y: 0, ease: "power4.out", duration: 1 },
        "start"
      )
      .to(faqContent, { autoAlpha: 1, y: 0 }, "start+=.5")
  }, [])

  const newTitle = point.question.split("")
  const newTitleDisplay = newTitle.map((letter, index) => {
    return letter !== " " ? <span key={index}>{letter}</span> : " "
  })

  return (
    <FaqStyled ref={triggerElement}>
      <div className="itemTitle">
        <h2 className="deskTitle">{newTitleDisplay}</h2>
        <h2 className="mobileTitle">{point.question}</h2>
      </div>
      <div
        className="itemWysiwyg"
        dangerouslySetInnerHTML={{ __html: point.answer }}
      />
    </FaqStyled>
  )
}

export default Faq
