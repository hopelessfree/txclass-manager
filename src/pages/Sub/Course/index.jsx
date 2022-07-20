import "./index.scss"
import ListTitle from "../../../components/common/ListTitle"
import CourseService from "../../../services/Course"
import TableHead from "../../../components/common/TableHead"
import TableBody from "./TableBody"
import CommonService from "../../../services/Common"


import React, {
  useEffect,
  useState,
} from 'react'

import {
  useNavigate,
} from "react-router"

import {
  COURSE_TH,
} from "../../../config/table_config"


const courseService = new CourseService()
const commonService = new CommonService()

const Course = () => {
  const navigate = useNavigate()
  const [title] = useState('课程管理')
  const [courseData, setCourseData] = useState([])
  const [fieldData, setFieldData] = useState([])

  const getCourseData = async () => {
    const result = await courseService.getCourseData()
    const { error_code, data } = result;

    if (error_code === 10006) {
      navigate('/login')
      return
    }

    if (error_code === 20001) {
      return
    }

    if (error_code !== 0) {
      navigate('/404')
      return
    }

    const { courseData, fieldData, } = data;

    courseData.forEach((cItem, cIndex) => {

      fieldData.forEach((fItem, fIndex) => {
        if (cItem.field === fItem.id) {
          cItem.fieldTitle = fItem.title
        }
      })

    })

    setCourseData(courseData)
    setFieldData(fieldData)
  }

  const onSelectChange = async (data, cid, index) => {
    const result = await courseService.changeCourseField({
      cid,
      field: data.id,
    })

    const { error_code } = result

    if (error_code !== 0) {
      alert('修改课程分类失败')
      return
    }

    alert('修改分类成功')
    getCourseData()
  }

  const onStatusClick = async (item, index) => {
    const { cid, status } = item;
    const result = await commonService.changeStatus({
      id: cid,
      status: Number(!status),
      field: 'COURSE',
    })

    const { error_code } = result;
    if (error_code !== 0) {
      alert('修改课程状态失败')
      return
    }

    alert('修改课程状态成功')
    getCourseData()
  }

  useEffect(() => {
    getCourseData()
  }, [])

  return (
    <div className={'list-container'}>
      <ListTitle
        title={title}
        onRefreshData={getCourseData}
      />

      <table className={'list-table'}>
        <TableHead tdData={COURSE_TH} />
        <TableBody
          courseData={courseData}
          fieldData={fieldData}
          onSelectChange={onSelectChange}
          onStatusClick={onStatusClick}
        />
      </table>
    </div>
  )
}

export default Course