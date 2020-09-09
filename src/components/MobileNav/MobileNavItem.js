import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors } from "../../styles/helpers"

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
    color: ${colors.colorSecondary};
    font-size: 1.8rem;
    border-bottom: 0.15rem solid ${colors.colorSecondary};

    &:hover {
      color: ${props => props.theme.colorPrimary};
    }
  }
`

const MobileNavItem = ({ item }) => {
  const slug = item.object_slug === "home" ? "" : item.object_slug

  return (
    <NavItem>
      <Link to={`/${slug}`}>{item.title}</Link>
    </NavItem>
  )
}

export default MobileNavItem
