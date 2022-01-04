import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { B1DarkGrey, standardWrapper } from "../../../styles/helpers"

const ShopLocation = ({ shopLocation }) => {
  console.log({ shopLocation })
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="map">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={shopLocation.acf._afr_shop_location_link}
          >
            <div className="map-image">
              <Img
                fluid={
                  shopLocation.acf._afr_shop_location_map.localFile
                    .childImageSharp.fluid
                }
                alt={shopLocation.acf._afr_shop_location_map.alt_text}
              />
            </div>
          </a>
        </div>
        <div
          className="hours"
          dangerouslySetInnerHTML={{ __html: shopLocation.acf._acf_shop_hours }}
        />
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  .wrapper {
    ${standardWrapper};
    align-items: center;
  }

  .map {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(50%);
    }
  }

  .hours {
    width: 100%;
    padding: 2rem;

    @media (min-width: 768px) {
      width: calc(50%);
      padding: 2rem 5rem;
    }

    @media (min-width: 1025px) {
      padding: 2rem 5rem;
    }

    p {
      ${B1DarkGrey};
    }
  }
`

export default ShopLocation
