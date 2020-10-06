import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors } from "../../styles/helpers"
import MobileNavItemSub from "./MobileNavItemSub"

const NavItem = styled.li`
  position: relative;
  width: 100%;
  align-self: center;
  font-size: 1.8rem;
  text-align: center;
  overflow: hidden;

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
  const slug = item.object_slug === "home" ? "" : item.object_slug
  const subMenuReq =
    item.wordpress_children !== null
      ? item.wordpress_children.length > 0
        ? true
        : false
      : false

  const subMenu = subMenuReq ? (
    <MobileNavItemSub items={item.wordpress_children} />
  ) : null
  const currentLocation = location.pathname.split("/").join("")
  const current = slug === currentLocation
  return (
    <NavItem currentPage={current}>
      <Link to={`/${slug}`}>{item.title}</Link>
      {subMenu}
    </NavItem>
  )
}

export default MobileNavItem
