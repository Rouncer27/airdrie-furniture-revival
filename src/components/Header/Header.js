import React from "react"
import styled from "styled-components"
import HeaderNav from "./HeaderNav"
import HeaderLogo from "./HeaderLogo"
import { medWrapper } from "../../styles/helpers"

import Horse from "../ClosedCropped/Horse"
import Flowers from "../ClosedCropped/Flowers"

const HeaderStyled = styled.header`
  position: relative;
  z-index: 999999;

  .headerWrap {
    ${medWrapper};
    align-items: center;
  }

  .horseGraphic {
    display: none;
    position: absolute;
    top: 0;
    left: 5vw;
    width: 31.25rem;
    height: 32.05rem;
    z-index: -1;

    @media (min-width: 768px) {
      display: block;
    }
  }

  .flowersGraphic {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    width: 46.14rem;
    height: 29.35rem;
    z-index: -1;

    @media (min-width: 768px) {
      display: block;
    }
  }
`

const Header = ({ siteTitle, location }) => {
  return (
    <HeaderStyled>
      <div className="headerWrap">
        <HeaderLogo siteTitle={siteTitle} />
        <HeaderNav location={location} />
      </div>
      <div className="horseGraphic">
        <Horse />
      </div>
      <div className="flowersGraphic">
        <Flowers />
      </div>
    </HeaderStyled>
  )
}

export default Header
