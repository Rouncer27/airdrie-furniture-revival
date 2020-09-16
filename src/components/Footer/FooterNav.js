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
} from "../../styles/helpers"

import FooterCopy from "./FooterCopy"

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
        ${B2White};
        display: block;
        text-transform: uppercase;
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
        background-color: ${colors.colorPrimary};

        @media (min-width: 768px) {
          width: 4rem;
          height: 4rem;
        }
        @media (min-width: 1025px) {
          width: 5rem;
          height: 5rem;
        }

        &::after {
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: ${colors.white};
          font-family: ${fonts.fontAwesome};
          font-size: 2.8rem;
          content: "";
        }

        @media (min-width: 768px) {
          &::after {
            font-size: 2rem;
          }
        }

        @media (min-width: 1025px) {
          &::after {
            font-size: 2.8rem;
          }
        }
      }
    }

    li.social-icon-facebook {
      a {
        &::after {
          content: "\f230";
        }

        &:hover {
          background-color: #3b5998;
        }
      }
    }
    li.social-icon-instagram {
      a {
        &::after {
          content: "\f16d";
        }
        &:hover {
          background-color: #3f729b;
        }
      }
    }
    li.social-icon-pintrest {
      a {
        &::after {
          content: "\f231";
        }
        &:hover {
          background-color: #e60023;
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
                return (
                  <li key={index} className={`social-icon-${account.type}`}>
                    <a href={account.url} />
                  </li>
                )
              }
            )}
          </div>
        </div>
        <div className="navItems">
          <nav>
            {footerMenu.items.map(item => {
              return (
                <Link key={item.wordpress_id} to={`/${item.object_slug}`}>
                  {item.title}
                </Link>
              )
            })}
          </nav>
        </div>
        <FooterCopy />
      </div>
    </FooterNavSection>
  )
}

export default FooterNav
