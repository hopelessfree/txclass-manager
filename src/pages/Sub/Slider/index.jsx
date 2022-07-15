import "./index.scss"
import ListTitle from "../../../components/common/ListTitle"
import TableHead from "../../../components/common/TableHead"
import TableBody from "./TableBody"
import { SLIDER_TH } from "../../../config/table_config"

import React, {
  useEffect,
  useState,
} from 'react'

import {
  CommonService,
  SliderService,
} from "../../../services"

const sliderService = new SliderService()
const commonService = new CommonService()

const Slider = () => {

  const [title] = useState('轮播图管理')
  const [sliderData, setSliderData] = useState([])

  const getSliderData = async () => {
    const result = await sliderService.getSliderData()
    setSliderData(result.data || [])
  }

  const onStatusClick = async (item) => {
    const { cid, status } = item;
    const result = await commonService.changeStatus({
      id: cid,
      status: Number(!status),
      field: 'SLIDER',
    })

    const { error_code } = result;
    if (error_code !== 0) {
      alert('修改课程状态失败')
      return
    }

    alert('修改课程状态成功')
    getSliderData()
  }

  useEffect(() => {
    getSliderData()
  }, [])

  return (
    <div className={'list-container'}>
      <ListTitle
        title={title}
        onRefreshData={getSliderData}
      />

      <table className={'list-table'}>
        <TableHead tdData={SLIDER_TH} />
        <TableBody
          sliderData={sliderData}
          onStatusClick={onStatusClick}
        />
      </table>
    </div>
  )
}

export default Slider