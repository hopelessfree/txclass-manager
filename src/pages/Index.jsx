import LoginService from "../services/Login"
import CourseService from "../services/Course"
import Header from "../components/Index/Header"
import SideBar from "../components/Index/SideBar"
import Container from "../components/Index/Container"


import React, {
  useState,
  useEffect,
} from 'react'

import {
  useNavigate,
} from "react-router-dom"

import {
  NAV,
} from "../config/config"

const loginService = new LoginService()
const courseService = new CourseService()

const IndexPage = () => {

  const navigate = useNavigate()
  const [curIdx, setCurIdx] = useState(0)
  const [curNav, setCurNav] = useState({ ...NAV[0] })


  const checkLogin = async () => {
    const result = await loginService.loginCheck()

    if (result.error_code === 10006) {
      navigate('/login')
    }

  }

  const onNavItemClick = (field, index) => {
    setCurIdx(index)
    setCurNav(field)
  }

  useEffect(() => {
    checkLogin()
  }, [])


  return (
    <div className={'container'}>
      <Header />
      <SideBar
        curIdx={curIdx}
        onNavItemClick={onNavItemClick}
      />
      <Container />
    </div>
  )
}

export default IndexPage