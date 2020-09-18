import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors } from "../../styles/helpers"
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
  let link = null
  const slug = createSlug(item.url)
  const currentPage = location.pathname === `/${slug}`

  if (item.type === "custom") {
    link = <a href={item.url}>{item.title}</a>
  } else {
    link = <Link to={`/${slug}`}>{item.title}</Link>
  }

  return <SubItem currentPage={currentPage}>{link}</SubItem>
}

export default HeaderNavItemSubMenuItem
