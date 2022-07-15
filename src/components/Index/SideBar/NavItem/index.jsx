import "./index.scss"
import React from 'react'

import {
  Link,
} from "react-router-dom";

const NavItem = (props) => {

  const {
    index,
    curIdx,
    dataItem,
    onNavItemClick,
  } = props;


  return (
    <div
      className={['nav-item', index === curIdx && 'nav-current'].join(' ')}
    >
      <Link
        to={`/${dataItem.field}`}
        onClick={() => onNavItemClick(dataItem.field, index)}
      >
        {dataItem.title}
        <i className={'iconfont icon-arrow-right'} />
      </Link>
    </div>
  )
}

export default NavItem