import React, { useState } from "react"
import MobileNavButton from "./MobileNavButton"
import MobileNavDrawer from "./MobileNavDrawer"

const MobileNav = ({ location }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <MobileNavButton toggleDrawer={handleToggleDrawer} isOpen={isOpen} />
      <MobileNavDrawer location={location} isOpen={isOpen} />
    </>
  )
}

export default MobileNav
