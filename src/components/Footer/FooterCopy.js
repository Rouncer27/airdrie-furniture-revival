import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import {
  B1DarkGrey,
  B1White,
  colors,
  fontSizer,
  fonts,
} from "../../styles/helpers"

const FooterCopySection = styled.div`
  width: 100%;

  .copyWrapper {
    display: flex;
    flex-wrap: wrap;
    padding: 1rem 2.5rem;
  }

  .footPrivacy {
    width: 100%;
    text-align: center;
    margin-top: 2.5rem;
    margin-right: 0;
    margin-bottom: 1rem;
    margin-left: auto;
    color: ${colors.white};

    @media (min-width: 768px) {
      width: 50%;
      margin-top: auto;
      text-align: left;
    }

    a {
      ${B1White};
      font-family: ${fonts.fontTert};
      text-transform: uppercase;

      &:hover {
        color: ${colors.colorPrimary};
      }
    }
  }

  .footCopy {
    width: 100%;
    margin-top: 3rem;
    text-align: center;

    @media (min-width: 768px) {
      text-align: left;
    }

    p {
      ${B1White};
      ${fontSizer(1.2, 1.4, 76.8, 150, 1.4)};
      margin: 0;
    }

    a {
      ${B1White};
      ${fontSizer(1.2, 1.4, 76.8, 150, 1.4)};
      margin: 0;

      &:hover {
        color: ${colors.colorPrimary};
      }
    }
  }
`

const FooterCopy = () => {
  return (
    <FooterCopySection>
      <div className="copyWrapper">
        <div className="footPrivacy">
          <Link to="/privacy-policy">Privacy</Link>
          {" | "}
          <Link to="/disclaimer">Disclaimer</Link>
        </div>
        <div className="footCopy">
          <p>
            Airdrie Furniture Revival © {new Date().getFullYear()} All Rights
            Reserved
          </p>
          <p>
            Designed, and developed by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://switchbackcreative.ca"
            >
              Switchback Creative
            </a>
            . Built with ♡ and{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.gatsbyjs.org"
            >
              Gatsby
            </a>
          </p>
        </div>
      </div>
    </FooterCopySection>
  )
}

export default FooterCopy
