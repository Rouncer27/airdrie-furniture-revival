import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { fonts, fontSizer, colors } from "../../styles/helpers"
import { createSlug } from "../../utils/helperFunc"

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
  item,
}) => {
  let navItem = null
  let slug = null
  let current = false

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

  // ITEM //
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
    <MainNavSubMenuItemStyled isCurrentSub={isCurrentSub}>
      {navItem}
    </MainNavSubMenuItemStyled>
  )
}

export default MainNavSubMenuItem
