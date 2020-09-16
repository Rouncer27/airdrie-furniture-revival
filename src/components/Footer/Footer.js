import React from "react"

import styled from "styled-components"
import { medWrapper, colors } from "../../styles/helpers"

import FooterNav from "./FooterNav"
import FooterList from "./FooterList"

const FooterSection = styled.footer`
  position: relative;
  padding: 0;

  @media (min-width: 768px) {
    padding: 7.5rem 0 1rem;
    background: linear-gradient(
      to right,
      ${colors.colorAccent} 0%,
      ${colors.colorAccent} 60%,
      ${colors.colorSecondary} 60%,
      ${colors.colorSecondary} 100%
    );
  }

  @media (min-width: 1025px) {
    padding: 7.5rem 0 1rem;
  }

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    width: 100%;
  }
`

const Footer = () => {
  return (
    <FooterSection>
      <div className="wrapper">
        <FooterNav />
        <FooterList />
      </div>
    </FooterSection>
  )
}

export default Footer
