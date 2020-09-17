import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import HeaderNavItem from "./HeaderNavItem"
import { colors } from "../../styles/helpers"

const getData = graphql`
  {
    mainMenu: wordpressWpApiMenusMenusItems(name: { eq: "Main Menu" }) {
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
  }
`

const HeaderNavStyled = styled.nav`
  display: none;
  align-self: center;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;

  @media (min-width: 768px) {
    display: block;
    width: auto;
    margin: 2rem auto;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    border-bottom: 0.2rem solid ${colors.colorTertiary};
  }
`

const HeaderNav = ({ location }) => {
  const data = useStaticQuery(getData)
  const menuItems = data.mainMenu.items
  return (
    <HeaderNavStyled>
      <ul>
        {menuItems.length > 0 &&
          menuItems.map(item => {
            return (
              <HeaderNavItem
                key={item.object_slug}
                item={item}
                location={location}
              />
            )
          })}
      </ul>
    </HeaderNavStyled>
  )
}

export default HeaderNav
