import "./index.scss"
import React from 'react'

import {
  Link,
} from "react-router-dom"

const HeaderLogo = () => {

  return (
    <div className={'header-logo-wrapper'}>
      <Link to={'/course'} className={'logo-link'} />
    </div>
  )
}

export default HeaderLogo