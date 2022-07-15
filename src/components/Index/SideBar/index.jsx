import './index.scss'
import React from 'react'

import {
  NAV,
} from '../../../config/config'
import NavItem from './NavItem'


const SideBar = (props) => {

  const {
    curIdx,
    onNavItemClick,
  } = props;

  return (
    <aside className={'side-bar'}>
      {
        NAV.map((item, index) => (
          <NavItem
            dataItem={item}
            key={index}
            index={index}
            curIdx={curIdx}
            onNavItemClick={onNavItemClick}
          />
        ))
      }
    </aside>
  )
}

export default SideBar