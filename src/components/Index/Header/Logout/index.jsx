import "./index.scss"
import React from 'react'
import LoginService from "../../../../services/Login"

import { useNavigate } from "react-router-dom"

const loginService = new LoginService()

const HeaderLogout = () => {
  const navigate = useNavigate()

  const onLogoutClick = async () => {
    const cfm = window.confirm('确定退出登录吗？')

    if (cfm) {
      const result = await loginService.logoutAction()

      if (result.error_code === 0) {
        navigate('/login')
      }
    }
  }

  return (
    <span className={'header-logout'} onClick={onLogoutClick}>
      安全退出
    </span>
  )
}

export default HeaderLogout