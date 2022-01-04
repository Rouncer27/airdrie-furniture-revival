import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { B1DarkGrey, colors, standardWrapper } from "../../../styles/helpers"

import IconFacebook from "../../Icons/IconFacebook"
import IconInstagram from "../../Icons/IconInstagram"
import IconPintrest from "../../Icons/IconPintrest"

const getData = graphql`
  {
    footerLogo: wordpressAcfOptions {
      options {
        afr_footer_logo {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 350) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
        afr_social_media_accounts {
          type
          url
        }
      }
    }
  }
`

const ContactBlockStyled = styled.section`
  padding: 5rem 0;
  .wrapper {
    ${standardWrapper};
  }

  .contentWrapper {
    p,
    a {
      ${B1DarkGrey};
    }

    a {
      color: ${colors.colorShad};
      font-weight: bold;
    }

    a:hover {
      color: ${colors.colorSecondary};
    }
  }

  .socialIcons {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;

    li {
      display: inline-block;
      margin-right: 0.5rem;
      margin-left: 0.5rem;

      a {
        display: block;
        position: relative;
        width: 5rem;
        height: 5rem;
        border-radius: 50%;

        @media (min-width: 768px) {
          width: 3rem;
          height: 3rem;
        }
        @media (min-width: 1025px) {
          width: 4rem;
          height: 4rem;
        }

        svg {
          display: block;
          width: 5rem;
          height: 5rem;
          margin: auto;
          transition: all 03s ease-out;
          fill: ${colors.colorPrimary};

          @media (min-width: 768px) {
            width: 3rem;
            height: 3rem;
          }
          @media (min-width: 1025px) {
            width: 4rem;
            height: 4rem;
          }

          &:hover {
            fill: ${colors.colorSecondary};
          }
        }
      }
    }
  }
`

const ContactBlock = ({ aboutShopContent }) => {
  const data = useStaticQuery(getData)
  const { footerLogo } = data
  return (
    <ContactBlockStyled>
      <div className="wrapper">
        <div className="contentWrapper">
          <div
            dangerouslySetInnerHTML={{
              __html: aboutShopContent.acf._afr_shop_about_content,
            }}
          />

          <div className="socialIcons">
            {footerLogo.options.afr_social_media_accounts.map(
              (account, index) => {
                let socialIcon
                if (account.type === "instagram") {
                  socialIcon = <IconInstagram />
                } else if (account.type === "facebook") {
                  socialIcon = <IconFacebook />
                } else if (account.type === "pintrest") {
                  socialIcon = <IconPintrest />
                }

                return (
                  <li key={index} className={`social-icon-${account.type}`}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={account.url}
                    >
                      {socialIcon}
                    </a>
                  </li>
                )
              }
            )}
          </div>
        </div>
      </div>
    </ContactBlockStyled>
  )
}

export default ContactBlock
