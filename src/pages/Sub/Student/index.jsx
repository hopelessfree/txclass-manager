import "./index.scss"
import ListTitle from "../../../components/common/ListTitle"
import TableHead from "../../../components/common/TableHead"
import TableBody from "./TableBody"
import { STUDENT_TH } from "../../../config/table_config"

import React, {
  useState,
  useEffect,
} from 'react'

import {
  CommonService,
  StudentService,
} from "../../../services"

const studentService = new StudentService()
const commonService = new CommonService()

const Student = () => {
  const [title] = useState('学生管理')
  const [studentData, setStudentData] = useState([])

  const getStudentData = async () => {
    const res = await studentService.getStudentData()
    setStudentData(res.data || [])
  }

  const onStatusClick = async (item) => {
    const { sid, status } = item;
    const result = await commonService.changeStatus({
      id: sid,
      status: Number(!status),
      field: 'STUDENT',
    })

    const { error_code } = result;
    if (error_code !== 0) {
      alert('修改课程状态失败')
      return
    }

    alert('修改课程状态成功')
    getStudentData()
  }

  useEffect(() => {
    getStudentData()
  }, [])

  return (
    <div className={'list-container'}>
      <ListTitle
        title={title}
        onRefreshData={getStudentData}
      />

      <table className={'list-table'}>
        <TableHead tdData={STUDENT_TH} />
        <TableBody
          studentData={studentData}
          onStatusClick={onStatusClick}
        />
      </table>
    </div>
  )
}

export default Student