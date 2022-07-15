import "./index.scss"

import React, {
} from 'react'

import Title from "./Title"
import LoginForm from "./LoginFrom"

const Index = () => {

  return (
    <div className={'form-wrapper'}>
      <Title />
      <LoginForm />
    </div>
  )
}

export default Index