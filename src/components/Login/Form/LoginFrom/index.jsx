import "./index.scss"
import LoginService from "../../../../services/Login"

import {
  useState,
  useEffect,
} from 'react'

import {
  trimSpace,
} from "../../../../utils/tools"

import {
  useNavigate,
} from "react-router-dom"


const loginService = new LoginService()

const Index = () => {

  const navigate = useNavigate()

  const [user, setUser] = useState({
    username: '',
    password: '',
  })

  const onInputTyping = (e) => {
    const { id, value } = e.target
    setUser({ ...user, [id]: value })
  }

  const onLoginSubmit = async () => {
    const username = trimSpace(user.username)
    const password = trimSpace(user.password)


    if (username.length <= 0) {
      alert('用户名长度不正确')
      return
    }

    if (password.length <= 0) {
      alert('密码长度不正确')
      return
    }

    const result = await loginService.loginAction({
      username,
      password,
    })

    const errorCode = result.error_code
    const errorMsg = result.error_msg

    if (errorCode !== 0) {
      alert(`${errorMsg} (error_code: ${errorCode})`)
      return
    }

    alert('登录成功')
    navigate('/')
  }

  const loginCheck = async () => {
    const result = await loginService.loginCheck()
    const errorCode = result.error_code

    if (errorCode === 10007) {
      navigate('/')
    }
  }

  useEffect(() => {
    loginCheck()
  }, [])

  return (
    <div className={'login-form-wrapper'}>
      <div className={'input-box'}>
        <label htmlFor={'username'} className={'iconfont icon-user'} />
        <input
          id={'username'}
          type={"text"}
          className={'login-input'}
          placeholder={'管理员用户名'}
          onChange={onInputTyping}
          value={user.username}
        />
      </div>

      <div className={'input-box'}>
        <label htmlFor={'password'} className={'iconfont icon-lock'} />
        <input
          id={'password'}
          type={"password"}
          className={'login-input'}
          placeholder={'管理员密码'}
          onChange={onInputTyping}
          value={user.password}
        />
      </div>

      <div className={'input-box'}>
        <button
          className={'btn btn-primary'}
          onClick={onLoginSubmit}
        >
          登陆后台
        </button>
      </div>
    </div>
  )
}

export default Index