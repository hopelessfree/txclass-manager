import "./index.scss"
import ListTitle from "../../../components/common/ListTitle"
import TableHead from "../../../components/common/TableHead"
import RecomCourseService from "../../../services/RecomCourse"
import CommonService from "../../../services/Common"
import TableBody from "./TableBody"
import { RECOM_COURSE_TH } from "../../../config/table_config"

import React, {
  useEffect,
  useState,
} from 'react'


const recomCourseService = new RecomCourseService()
const commonService = new CommonService()

const RecomCourse = () => {

  const [title, setTitle] = useState('推荐课程管理')
  const [recomCourseData, setRecomCourseData] = useState([])

  const getRecomeCourseData = async () => {
    const result = await recomCourseService.getRecomCourseData()
    setRecomCourseData(result.data || [])
  }

  const onStatusClick = async (item, index) => {
    const { cid, status } = item;
    const result = await commonService.changeStatus({
      id: cid,
      status: Number(!status),
      field: 'RECOM_COURSE',
    })

    const { error_code } = result;
    if (error_code !== 0) {
      alert('修改课程状态失败')
      return
    }

    alert('修改课程状态成功')
    getRecomeCourseData()
  }

  useEffect(() => {
    getRecomeCourseData()
  }, [])

  return (
    <div className={'list-container'}>
      <ListTitle
        title={title}
        onRefreshData={getRecomeCourseData}
      />

      <table className={'list-table'}>
        <TableHead tdData={RECOM_COURSE_TH} />
        <TableBody
          recomCourseData={recomCourseData}
          onStatusClick={onStatusClick}
        />
      </table>
    </div>
  )
}

export default RecomCourse