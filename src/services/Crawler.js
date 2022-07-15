import HTTP from "../utils/http"
import { API } from "../config/config"

export default class CrawlerService extends HTTP {
  crawlAction(apiName) {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: API.CRAWL_ACTION + apiName,
        success(data) {
          resolve(data)
        },
        error() {
          alert('网络请求失败')
        }
      })
    })
  }
}