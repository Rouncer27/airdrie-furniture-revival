import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import gsap from "gsap"

import MobileNavItemSubItem from "./MobileNavItemSubItem"
import { colors } from "../../styles/helpers"

const MobileSubMenuStyled = styled.ul`
  max-width: 100%;
  ${"" /* max-height: ${props => (props.isOpen ? "35rem" : "0rem")}; */}
  margin: 0 auto;
  ${"" /* margin-bottom: ${props => (props.isOpen ? "5rem" : "0rem")}; */}
  padding: 0rem;

  .sub-menu-button {
    position: absolute;
    top: 0;
    bottom: 0.3rem;
    right: 1.5rem;
    width: 5rem;
    max-height: 5rem;
    transition: all 0.3s ease;
    background: ${colors.colorTertiary};
    border: solid 0.2rem ${props => props.theme.white};
    color: ${props => props.theme.black};
    font-size: 4rem;
    font-weight: bold;
    line-height: 0.25;

    &:hover {
      background: ${props => props.theme.colorTert};
      color: ${props => props.theme.colorSecondary};
      cursor: pointer;
    }

    &:focus {
      outline: none;
    }
  }

  .sub-menu-item:nth-of-type(1) {
    a {
      border-top: solid 0.1rem ${props => props.theme.colorTert};
    }
  }
`

const MobileNavItemSub = props => {
  const subMenu = useRef(null)
  const { items, currentPageSlug, location } = props
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    const amountOfSubs = Array.from(subMenu.current.querySelectorAll("li"))
    let heightOfAll = 0
    amountOfSubs.forEach(listItem => (heightOfAll += listItem.offsetHeight))

    if (isOpen) {
      gsap.to(subMenu.current, {
        maxHeight: `${heightOfAll}px`,
        marginBottom: "5rem",
      })
    } else {
      gsap.to(subMenu.current, { maxHeight: "0rem", marginBottom: "0rem" })
    }
  }, [isOpen])

  return (
    <MobileSubMenuStyled
      className="mobile-nav-sub"
      ref={subMenu}
      isOpen={isOpen}
    >
      <button
        type="button"
        className="sub-menu-button"
        onClick={() => {
          setOpen(!isOpen)
        }}
      >
        {isOpen ? "-" : "+"}
      </button>
      {items.map((item, index) => {
        return (
          <MobileNavItemSubItem
            title={item.title}
            currentPageSlug={currentPageSlug}
            objectSlug={item.object_slug}
            url={item.url}
            location={location}
            key={index}
            item={item}
          />
        )
      })}
    </MobileSubMenuStyled>
  )
}

export default MobileNavItemSub
