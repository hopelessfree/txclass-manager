import "./index.scss"
import React from 'react'

import {
  Outlet
} from "react-router-dom"

const Board = () => {

  return (
    <div className={'page-board'}>
      <Outlet />
    </div>
  )
}

export default Board