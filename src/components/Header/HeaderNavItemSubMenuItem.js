import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { fontSizer, colors, fonts } from "../../styles/helpers"
import { createSlug } from "../../utils/helperFunc"

const SubItem = styled.li`
  a {
    font-size: 1.2rem !important;
    color: ${props =>
      props.currentPage
        ? colors.colorSecondary
        : colors.colorTertiary} !important;

    &:hover {
      cursor: ${props => (props.currentPage ? "inherit" : "pointer")};
    }
  }
`

const HeaderNavItemSubMenuItem = ({ parentSlug, location, item }) => {
  const slug = createSlug(item.url)
  const currentPage = location.pathname === `/${slug}`

  return (
    <SubItem currentPage={currentPage}>
      <Link to={`/${slug}`}>{item.title}</Link>
    </SubItem>
  )
}

export default HeaderNavItemSubMenuItem
