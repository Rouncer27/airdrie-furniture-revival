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
    left: 0;
    width: 31.25rem;
    height: 32.05rem;
    z-index: -1;

    @media (min-width: 768px) {
      display: block;
      top: 0;
      left: 1vw;
      width: calc(31.25rem / 1.5);
      height: calc(32.05rem / 1.5);
    }

    @media (min-width: 1025px) {
      top: 0;
      left: -5rem;
      width: calc(31.25rem / 1.1);
      height: calc(32.05rem / 1.1);
    }

    @media (min-width: 1200px) {
      top: 0;
      left: 0;
      width: calc(31.25rem);
      height: calc(32.05rem);
    }

    @media (min-width: 1500px) {
      top: 0;
      left: 3vw;
      width: calc(31.25rem);
      height: calc(32.05rem);
    }
  }

  .flowersGraphic {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    width: calc(46.14rem / 2);
    height: calc(29.35rem / 2);
    z-index: -1;

    @media (min-width: 768px) {
      display: block;
      width: calc(46.14rem / 2);
      height: calc(29.35rem / 2);
    }

    @media (min-width: 1025px) {
      top: 0;
      right: 0;
      width: calc(46.14rem / 1.5);
      height: calc(29.35rem / 1.5);
    }

    @media (min-width: 1200px) {
      top: 0;
      right: 0;
      width: calc(46.14rem / 1.2);
      height: calc(29.35rem / 1.2);
    }
    @media (min-width: 1500px) {
      top: 0;
      right: 0;
      width: calc(46.14rem);
      height: calc(29.35rem);
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
