import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { fontSizer, colors, fonts } from "../../styles/helpers"
import { createSlug } from "../../utils/helperFunc"

const SubItem = styled.li`
  a {
    font-size: 1.2rem !important;
  }
`

const HeaderNavItemSubMenuItem = ({ location, item }) => {
  const slug = createSlug(item.url)
  const currentPage = location === `/${slug}`

  return (
    <SubItem>
      <Link to={`/${slug}`}>{item.title}</Link>
    </SubItem>
  )
}

export default HeaderNavItemSubMenuItem
