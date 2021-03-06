import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import {
  colors,
  H1DarkGrey,
  B2DarkGrey,
  Btn1DarkGrey,
} from "../../styles/helpers"

const getData = graphql`
  {
    mailchimp: wordpressAcfOptions {
      options {
        afr_footer_content
        afr_mailchimp_url
      }
    }
  }
`

const FooterListSection = styled.div`
  width: 100%;
  background-color: ${colors.colorSecondary};

  @media (min-width: 768px) {
    width: calc(40%);
  }

  .wrapper {
    padding: 2rem;
    max-width: 40rem;
    margin: 2rem auto;
    text-align: center;

    @media (min-width: 768px) {
    }

    @media (min-width: 1025px) {
      margin-left: 2.5rem;
    }
    @media (min-width: 1200px) {
      margin-left: 5rem;
    }
  }

  .listTitle {
    width: 100%;
    h2 {
      ${H1DarkGrey};
    }
  }

  .listContent {
    width: 100%;
    p {
      ${B2DarkGrey};
    }
  }

  .listLink {
    width: 100%;

    a {
      ${Btn1DarkGrey};
    }
  }
`

const FooterList = () => {
  const data = useStaticQuery(getData)
  const { mailchimp } = data
  return (
    <FooterListSection>
      <div className="wrapper">
        <div className="listTitle">
          <h2>Join our List</h2>
        </div>
        <div
          className="listContent"
          dangerouslySetInnerHTML={{
            __html: mailchimp.options.afr_footer_content,
          }}
        />
        <div className="listLink">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={mailchimp.options.afr_mailchimp_url}
          >
            Subscribe
          </a>
        </div>
      </div>
    </FooterListSection>
  )
}

export default FooterList
