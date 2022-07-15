import "./index.scss"
import ListTitle from "../../../components/common/ListTitle"
import CourseService from "../../../services/Course"
import TableHead from "../../../components/common/TableHead"
import TableBody from "./TableBody"
import CommonService from "../../../services/Common"
import CollectionService from "../../../services/Collection"
import { COLLECTION_TH, } from "../../../config/table_config"

import React, {
  useEffect,
  useState,
} from 'react'


const collectionService = new CollectionService()
const commonService = new CommonService()

const Collection = () => {
  const [title] = useState('课程集合管理')
  const [collectionData, setCollectionData] = useState([])

  const getCollectionData = async () => {
    const result = await collectionService.getCollectionData()
    setCollectionData(result.data || [])
  }

  const onStatusClick = async (item) => {
    const { cid, status } = item;
    const result = await commonService.changeStatus({
      id: cid,
      status: Number(!status),
      field: 'COLLECTION',
    })

    const { error_code } = result;
    if (error_code !== 0) {
      alert('修改课程状态失败')
      return
    }

    alert('修改课程状态成功')
    getCollectionData()
  }

  useEffect(() => {
    getCollectionData()
  }, [])

  return (
    <div className={'list-container'}>
      <ListTitle
        title={title}
        onRefreshData={getCollectionData}
      />

      <table className={'list-table'}>
        <TableHead tdData={COLLECTION_TH} />
        <TableBody
          collectionData={collectionData}
          onStatusClick={onStatusClick}
        />
      </table>
    </div>
  )
}

export default Collection