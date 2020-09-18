import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors, fonts } from "../../styles/helpers"

import HeaderNavItemSubMenuItem from "./HeaderNavItemSubMenuItem"

const SubMenu = styled.div`
  flex-wrap: wrap !important;
  position: absolute;
  top: calc(100%);
  left: -2rem;
  width: 20rem;
  padding: 1rem 2rem;
  background-color: ${colors.white};
  border: solid 1px ${colors.colorTertiary};
  transition: all 0.3s ease-in;
  opacity: ${props => (props.isActive ? "1" : "0")};
  visibility: ${props => (props.isActive ? "visible" : "hidden")};

  .subMenuWrap {
    position: relative;
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
