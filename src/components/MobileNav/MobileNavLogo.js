import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"

const NavLogo = styled.div`
  width: 100%;
  max-width: 25rem;
  margin: 2rem auto 4rem;
`

const MobileNavLogo = ({ mainLogo }) => {
  return (
    <NavLogo>
      <Link to="/">
        <Img
          fluid={mainLogo.options.afr_main_logo.localFile.childImageSharp.fluid}
          alt={mainLogo.options.afr_main_logo.alt_text}
        />
      </Link>
    </NavLogo>
  )
}

export default MobileNavLogo
