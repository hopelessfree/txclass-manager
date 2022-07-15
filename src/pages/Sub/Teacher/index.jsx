import "./index.scss"
import ListTitle from "../../../components/common/ListTitle"
import TableHead from "../../../components/common/TableHead"
import TableBody from "./TableBody"
import { TEACHER_TH } from "../../../config/table_config"

import React, {
  useState,
  useEffect,
} from 'react'

import {
  CommonService,
  TeacherService,
} from "../../../services"

const teacherService = new TeacherService()
const commonService = new CommonService()

const Teacher = () => {
  const [title] = useState('老师管理')
  const [teacherData, setTeacherData] = useState([])

  const getTeacherData = async () => {
    const res = await teacherService.getTeacherData()
    setTeacherData(res.data || [])
  }

  const onStatusClick = async (item) => {
    const { tid, status } = item;
    const result = await commonService.changeStatus({
      id: tid,
      status: Number(!status),
      field: 'TEACHER',
    })

    const { error_code } = result;
    if (error_code !== 0) {
      alert('修改课程状态失败')
      return
    }

    alert('修改课程状态成功')
    getTeacherData()
  }

  const onStarClick = async (item) => {
    const { tid, isStar } = item;
    const result = await teacherService.selectStarTeacher({
      id: tid,
      isStar: Number(!isStar),
      field: 'TEACHER',
    })

    const { error_code } = result;
    if (error_code !== 0) {
      return
    }

    getTeacherData()
  }

  useEffect(() => {
    getTeacherData()
  }, [])

  return (
    <div className={'list-container'}>
      <ListTitle
        title={title}
        onRefreshData={getTeacherData}
      />

      <table className={'list-table'}>
        <TableHead tdData={TEACHER_TH} />
        <TableBody
          teacherData={teacherData}
          onStatusClick={onStatusClick}
          onStarClick={onStarClick}
        />
      </table>
    </div>
  )
}

export default Teacher