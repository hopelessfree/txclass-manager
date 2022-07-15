import "./index.scss"
import ListTitle from "../../../components/common/ListTitle"
import TableHead from "../../../components/common/TableHead"
import CrawlerService from "../../../services/Crawler"
import crawler_config from "../../../config/crawler_config"
import TableBody from "./TableBody"
import { CRAWLER_TH } from "../../../config/table_config"

import React, {
  useState,
} from 'react'

const crawlerService = new CrawlerService()

const Crawler = () => {
  const [title] = useState('数据爬虫管理')
  const [crawlerData, setCrawlerData] = useState(crawler_config)

  const onCrawlerClick = async (data, index) => {
    const { apiName } = data;
    crawlerData[index].loading = !crawlerData[index].loading
    setCrawlerData([...crawlerData])

    const result = await crawlerService.crawlAction(apiName)
    const { error_code } = result;

    if (error_code === 0) {
      alert('数据爬取成功')
    }

    crawlerData[index].loading = !crawlerData[index].loading
    setCrawlerData([...crawlerData])
  }

  return (
    <div className={'list-container'}>
      <ListTitle
        title={title}
      // onRefreshData={getTeacherData}
      />

      <table className={'list-table'}>
        <TableHead tdData={CRAWLER_TH} />
        <TableBody
          crawlerData={crawlerData}
          onCrawlerClick={onCrawlerClick}
        />
      </table>
    </div>
  )
}

export default Crawler