import "./index.scss"
import React from 'react'
import HeaderLogo from "./Logo"
import HeaderTitle from "./Title"
import HeaderLogout from "./Logout"

const Header = () => {
  return (
    <header className={'header'}>
      <HeaderLogo />
      <HeaderTitle />
      <HeaderLogout />
    </header>
  )
}

export default Header