import HTTP from "../utils/http"
import { API } from "../config/config"

export default class CollectionService extends HTTP {
  getCollectionData() {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: API.GET_COLLECTION_DATA,
        success(data) { resolve(data) },
        error(err) { alert('网络请求失败') },
      })
    })
  }
}