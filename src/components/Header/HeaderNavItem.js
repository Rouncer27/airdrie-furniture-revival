import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { createSlug } from "../../utils/helperFunc"
import { Nav1CoolGrey } from "../../styles/helpers"

// import HeaderNavItemSubMenu from "./HeaderNavItemSubMenu"

const NavItem = styled.li`
  position: relative;
  margin: 0 2rem;

  a,
  span {
    ${Nav1CoolGrey};
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

  return (
    <NavItem isActive={isActive} current={current}>
      {navItem}
    </NavItem>
  )
}

export default HeaderNavItem
