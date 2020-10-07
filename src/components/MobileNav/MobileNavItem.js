import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors } from "../../styles/helpers"
import MobileNavItemSub from "./MobileNavItemSub"
import { createSlug } from "../../utils/helperFunc"

const NavItem = styled.li`
  position: relative;
  width: 100%;
  align-self: center;
  font-size: 1.8rem;
  text-align: center;
  overflow: hidden;

  ${props => console.log(props.currentPage)};

  a {
    display: block;
    padding: 1rem 2rem;
    background-color: ${props =>
      props.currentPage ? colors.colorPrimary : "transparent"};
    color: ${props =>
      props.currentPage ? colors.white : colors.colorSecondary};
    font-size: 1.8rem;
    border-bottom: 0.15rem solid ${colors.colorSecondary};

    &:hover {
      color: ${props =>
        props.currentPage ? colors.white : colors.colorPrimary};
    }
  }
`

const MobileNavItem = ({ item, location }) => {
  let navItem = null
  let slug = null
  let current = false

  const subMenuReq =
    item.wordpress_children !== null
      ? item.wordpress_children.length > 0
        ? true
        : false
      : false

  const subMenu = subMenuReq ? (
    <MobileNavItemSub items={item.wordpress_children} />
  ) : null

  if (item.type === "custom") {
    const newBrowserWindow = item.target === "_blank" ? true : false
    if (newBrowserWindow) {
      navItem = (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={item.url}
          className="nolink"
        >
          {item.title}
        </a>
      )
    } else {
      navItem = (
        <a href={item.url} className="nolink">
          {item.title}
        </a>
      )
    }
  } else {
    if (item.url === "") {
      navItem = <span className="nolink">{item.title}</span>
    } else {
      slug = createSlug(item.url)
      current =
        location?.pathname === "/"
          ? location?.pathname === slug
            ? true
            : false
          : location?.pathname.split("/").join("") === slug
          ? true
          : false
      const displaySlug = slug === "/" ? "" : slug

      navItem = <Link to={`/${displaySlug}`}>{item.title}</Link>
    }
  }

  return (
    <NavItem currentPage={current}>
      {navItem}
      {subMenu}
    </NavItem>
  )
}

export default MobileNavItem
