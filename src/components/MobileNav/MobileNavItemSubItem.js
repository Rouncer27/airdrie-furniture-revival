import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { fonts, fontSizer, colors } from "../../styles/helpers"

const MainNavSubMenuItemStyled = styled.li`
  ${fontSizer(1.2, 1.3, 76.8, 150, 1.4)}
  width: 100%;

  a.sub-menu-link {
    display: block;
    width: 100%;
    padding: 1rem 0.5rem;
    border-bottom: 0.2rem solid ${colors.colorTertiary};
    background: ${props =>
      props.isCurrentSub ? "rgba(78, 91, 49, 0.5)" : "transparent"};
    color: ${colors.black};
    font-family: ${fonts.fontPrimary};
    font-size: 1em;
    font-weight: bold;

    &:hover {
      background: ${props =>
        props.isCurrentSub
          ? props.theme.colorPrimary
          : props => props.theme.colorSecondary};
      color: ${colors.white};
    }
  }
`

const MainNavSubMenuItem = ({
  currentPageSlug,
  objectSlug,
  title,
  location,
  url,
}) => {
  const isCurrentSub =
    `${currentPageSlug}/${objectSlug}` === location ||
    `${currentPageSlug}/${objectSlug}/` === location
      ? true
      : false

  const subSlug = url
    .split("/")
    .filter(part => {
      if (
        part !== "" &&
        part !== "http:" &&
        part !== "https:" &&
        part !== "localhost"
      )
        return part
    })
    .filter((slug, index) => {
      if (index !== 0) return slug
    })
    .join("/")

  return (
    <MainNavSubMenuItemStyled isCurrentSub={isCurrentSub}>
      <Link className="sub-menu-link" to={`/${subSlug}`}>
        {title}
      </Link>
    </MainNavSubMenuItemStyled>
  )
}

export default MainNavSubMenuItem
