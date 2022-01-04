import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import {
  Nav1CoolGrey,
  colors,
  B2White,
  fonts,
  B2Pink,
  B1White,
} from "../../styles/helpers"

import FooterCopy from "./FooterCopy"
import IconFacebook from "../Icons/IconFacebook"
import IconInstagram from "../Icons/IconInstagram"
import IconPintrest from "../Icons/IconPintrest"

const getData = graphql`
  {
    footerLogo: wordpressAcfOptions {
      options {
        acf_store_hours
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

    footerMenu: wordpressWpApiMenusMenusItems(name: { eq: "Footer Menu" }) {
      items {
        wordpress_id
        title
        object_slug
        target
        type
        url
      }
    }
  }
`

const FooterNavSection = styled.div`
  width: 100%;
  padding: 7.5rem 0;
  background-color: ${colors.colorAccent};

  @media (min-width: 768px) {
    width: calc(60%);
    max-width: 60rem;
    margin-left: auto;
    padding: 0;
  }

  .wrapper {
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }
  .navSocial {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(50% - 5rem);
      margin-right: 5rem;
      padding: 2rem;
    }
  }

  .storehours {
    @media (min-width: 768px) {
      width: 50%;
    }

    p {
      ${B1White};
    }
  }

  .navItems {
    display: none;

    @media (min-width: 768px) {
      display: flex;
      align-items: stretch;
      justify-content: center;
      flex-wrap: wrap;
      width: 50%;
    }

    @media (min-width: 1025px) {
    }

    nav {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      flex-wrap: wrap;
      width: 100%;

      a {
        ${B1White};
        display: block;
        text-transform: uppercase;

        &:hover {
          color: ${colors.colorSecondary};
        }
      }
    }
  }

  .navLogo {
    width: 100%;
    margin-bottom: 1.5rem;

    @media (min-width: 768px) {
    }

    div {
      max-width: 20rem;
      margin: auto;

      @media (min-width: 768px) {
        max-width: 100%;
      }
    }
  }

  .socialIcons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;

    p {
      ${B2Pink};
      width: 100%;
      margin: 1rem auto;
      text-align: center;

      @media (min-width: 768px) {
        width: auto;
        text-align: left;
      }
    }

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

const FooterNav = () => {
  const data = useStaticQuery(getData)
  const { footerLogo, footerMenu } = data
  return (
    <FooterNavSection>
      <div className="wrapper">
        <div className="navSocial">
          <div className="navLogo">
            <Img
              fluid={
                footerLogo.options.afr_footer_logo.localFile.childImageSharp
                  .fluid
              }
              alt="Airdrie Furniture Revival"
            />
          </div>
          <div className="socialIcons">
            <p>See us on Social</p>
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
        {/* <div className="navItems">
          <nav>
            {footerMenu.items.map(item => {
              return (
                <Link key={item.wordpress_id} to={`/${item.object_slug}`}>
                  {item.title}
                </Link>
              )
            })}
            <a href="https://shop.airdriefurniturerevival.ca/">Shop</a>
          </nav>
        </div> */}
        <div className="storehours">
          <div
            dangerouslySetInnerHTML={{
              __html: footerLogo.options.acf_store_hours,
            }}
          />
        </div>
        <FooterCopy />
      </div>
    </FooterNavSection>
  )
}

export default FooterNav
