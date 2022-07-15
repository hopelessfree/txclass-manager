import "./index.scss"
import React from 'react'

const Error = () => {
  return (
    <div className={'error-wrapper'}>
      <div className={"inner"}>
        <h1>404</h1>
        <p>未找到页面</p>
      </div>
    </div>
  )
}

export default Error