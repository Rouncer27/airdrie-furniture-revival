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

const getData = graphql`
  {
    mailchimpContent: wordpressAcfOptions {
      options {
        afr_footer_content
        afr_mailchimp_url
      }
    }
  }
`

const MailChimpListSection = styled.section`
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

  .chimpLink {
    width: calc(100%);
    margin-top: 5rem;
    text-align: center;

    @media (min-width: 768px) {
      width: calc(33.33%);
      margin-top: 0;
    }

    h2 {
      ${H1DarkGrey};
    }

    a {
      ${Btn1DarkGrey};
    }
  }

  .chimpContent {
    width: calc(100%);
    text-align: center;

    @media (min-width: 768px) {
      width: calc(66.66% - 2rem);
      margin-left: 2rem;
      text-align: left;
    }

    p {
      ${B2DarkGrey};

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
`

const MailChimpList = ({ mailChimp }) => {
  const data = useStaticQuery(getData)
  const { mailchimpContent } = data

  useEffect(() => {
    const triggerElement = document.querySelector("#mailchimpSec")
    const chimpLink = triggerElement.querySelector(".chimpLink")
    const chimpContent = triggerElement.querySelector(".chimpContent")

    gsap.set(chimpLink, { autoAlpha: 0, x: -150 })
    gsap.set(chimpContent, { autoAlpha: 0, x: 150 })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: triggerElement,
          markers: false,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      })
      .to(
        chimpLink,
        {
          autoAlpha: 1,
          x: 0,
        },
        "start"
      )
      .to(
        chimpContent,
        {
          autoAlpha: 1,
          x: 0,
        },
        "start"
      )
  }, [])

  const mailChimpContent = mailChimp.acf._acf_mailchimp_list ? (
    <MailChimpListSection id="mailchimpSec">
      <div className="wrapper">
        <div className="chimpLink">
          <h2>Join our List</h2>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={mailchimpContent.options.afr_mailchimp_url}
            >
              Subscribe
            </a>
          </div>
        </div>
        <div className="chimpContent">
          <div
            dangerouslySetInnerHTML={{
              __html: mailChimp.acf._afr_mailchimp_list_content,
            }}
          />
        </div>
      </div>
    </MailChimpListSection>
  ) : null

  return <>{mailChimpContent}</>
}

export default MailChimpList
