import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors } from "../../styles/helpers"

import HeaderNavItemSubMenuItem from "./HeaderNavItemSubMenuItem"

const SubMenu = styled.div`
  flex-wrap: wrap !important;
  position: absolute;
  top: calc(100%);
  left: -2rem;
  width: 34rem;
  padding: 1rem 2rem;
  background-color: ${colors.white};
  border: solid 1px ${colors.colorTertiary};
  transition: all 0.3s ease-in;
  opacity: ${props => (props.isActive ? "1" : "0")};
  visibility: ${props => (props.isActive ? "visible" : "hidden")};

  .subMenuWrap {
    display: block;
    border: solid 0 transparent;
  }
`

const HeaderNavItemSubMenu = ({
  isActive,
  handleIsActiveOn,
  handleIsActiveOff,
  subItems,
  parentSlug,
  location,
}) => {
  return (
    <SubMenu
      isActive={isActive}
      onMouseEnter={handleIsActiveOn}
      onMouseLeave={handleIsActiveOff}
    >
      <ul className="subMenuWrap">
        {subItems.map(item => (
          <HeaderNavItemSubMenuItem
            item={item}
            parentSlug={parentSlug}
            key={item.wordpress_id}
            location={location}
          />
        ))}
      </ul>
    </SubMenu>
  )
}

export default HeaderNavItemSubMenu
