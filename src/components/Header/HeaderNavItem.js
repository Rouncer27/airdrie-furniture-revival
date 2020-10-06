import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { createSlug } from "../../utils/helperFunc"
import { Nav1CoolGrey, colors, fonts } from "../../styles/helpers"

import HeaderNavItemSubMenu from "./HeaderNavItemSubMenu"

const NavItem = styled.li`
  position: relative;
  margin: 0 2rem;
  padding-right: ${props => (props.subMenu ? "2rem" : "0")};

  ${"" /* &::before {
      font-family: ${fonts.fontAwesome};
      display: ${props => (props.subMenu ? "block" : "none")};
      position: absolute;
      top: 50%;
      right: 0rem;
      transform: ${props =>
        props.isActive
          ? "translateY(-50%) rotate(-90deg)"
          : "translateY(-50%) "};
      transition: all 0.1s linear;
      color: ${colors.colorTertiary};
      content: "\f0d9";
      opacity: 1;
    } */}

  a,
  span {
    ${Nav1CoolGrey};
    color: ${props =>
      props.current ? colors.colorSecondary : colors.colorTertiary};
    text-transform: uppercase;
  }

  span.nolink {
    cursor: initial;
  }
`

const HeaderNavItem = ({ item, location }) => {
  let navItem = null
  let slug = null
  let current = false
  const subMenu = item.wordpress_children ? item.wordpress_children : false
  const [isActive, setIsActive] = useState(false)

  const handleIsActiveOn = () => {
    setIsActive(true)
  }
  const handleIsActiveOff = () => {
    setIsActive(false)
  }

  if (item.type === "custom") {
    const newBrowserWindow = item.target === "_blank" ? true : false
    if (newBrowserWindow) {
      navItem = (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={item.url}
          className="nolink"
          onMouseEnter={handleIsActiveOn}
          onMouseLeave={handleIsActiveOff}
        >
          {item.title}
        </a>
      )
    } else {
      navItem = (
        <a
          href={item.url}
          className="nolink"
          onMouseEnter={handleIsActiveOn}
          onMouseLeave={handleIsActiveOff}
        >
          {item.title}
        </a>
      )
    }
  } else {
    if (item.url === "") {
      navItem = (
        <span
          className="nolink"
          onMouseEnter={handleIsActiveOn}
          onMouseLeave={handleIsActiveOff}
        >
          {item.title}
        </span>
      )
    } else {
      slug = createSlug(item.url)
      current =
        location !== undefined
          ? location.pathname.split("/").join("") === slug
            ? true
            : false
          : false

      navItem = (
        <Link
          onMouseEnter={handleIsActiveOn}
          onMouseLeave={handleIsActiveOff}
          to={`/${slug}`}
        >
          {item.title}
        </Link>
      )
    }
  }

  return (
    <NavItem isActive={isActive} current={current} subMenu={subMenu}>
      {navItem}
      {subMenu ? (
        <HeaderNavItemSubMenu
          isActive={isActive}
          handleIsActiveOn={handleIsActiveOn}
          handleIsActiveOff={handleIsActiveOff}
          subItems={subMenu}
          parentSlug={slug}
          location={location}
        />
      ) : null}
    </NavItem>
  )
}

export default HeaderNavItem
