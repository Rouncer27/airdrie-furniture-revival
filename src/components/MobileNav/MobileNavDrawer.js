import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import MobileNavLogo from "./MobileNavLogo"
import MobileNavItem from "./MobileNavItem"
import { colors } from "../../styles/helpers"

const getData = graphql`
  {
    mobileMenu: wordpressWpApiMenusMenusItems(name: { eq: "Mobile Menu" }) {
      items {
        wordpress_id
        title
        object_slug
        target
        type
        url
        wordpress_children {
          wordpress_id
          title
          object_slug
          url
        }
      }
    }

    mainLogo: wordpressAcfOptions {
      options {
        afr_main_logo {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 350) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`

const NavDrawer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  transition: all 0.3s ease-in;
  transform: translateX(${props => (props.isOpen ? "0%" : "-100%")});
  background: ${colors.white};
  opacity: ${props => (props.isOpen ? 1 : 0)};
  z-index: ${props => (props.isOpen ? 9999999 : -9999999)};
  overflow-y: scroll;

  @media (min-width: 768px) {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }

  .wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
`

const MobileNavDrawer = ({ isOpen, location }) => {
  const data = useStaticQuery(getData)
  const menuItems = data.mobileMenu.items
  const { mainLogo } = data
  return (
    <NavDrawer isOpen={isOpen}>
      <div className="wrapper">
        <MobileNavLogo mainLogo={mainLogo} />
        {menuItems.map(item => (
          <MobileNavItem
            location={location}
            key={item.object_slug}
            item={item}
          />
        ))}
      </div>
    </NavDrawer>
  )
}

export default MobileNavDrawer
