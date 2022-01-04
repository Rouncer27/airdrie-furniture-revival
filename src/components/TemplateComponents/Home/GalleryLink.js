import React from "react"
import styled from "styled-components"
import { H2White, medWrapper, B1White, colors } from "../../../styles/helpers"
import BGImage from "gatsby-background-image"

const GalleryLink = ({ links }) => {
  console.log({ links })
  return (
    <SectionStyled>
      <div className="wrapper">
        {links.acf._afr_links.map((link, index) => {
          return (
            <GalleryLinkItem href={link.url} key={index}>
              <div className="content">
                <p>Featured Item</p>
                <h2>{link.title}</h2>
              </div>
              <div className="bgimage">
                <BGImage
                  tag="div"
                  fluid={link.image.localFile.childImageSharp.fluid}
                />
              </div>
            </GalleryLinkItem>
          )
        })}
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: 2rem auto;
  }
`

const GalleryLinkItem = styled.a`
  position: relative;
  width: 100%;
  min-height: 60rem;
  margin: 1rem auto;

  @media (min-width: 768px) {
    width: calc((100% / 3) - 1rem);
    margin: auto 0.5rem;
  }

  .content {
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    padding: 4.5rem 2rem;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    text-align: center;
    text-transform: uppercase;

    p {
      ${B1White};
    }

    h2 {
      ${H2White};
    }

    p,
    h2 {
      margin: 0;
      transition: all 0.3s ease-out;
    }
  }

  &:hover {
    p,
    h2 {
      color: ${colors.colorSecondary};
    }
  }

  .bgimage {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;

    div {
      width: 100%;
      height: 100%;
    }
  }
`

export default GalleryLink
