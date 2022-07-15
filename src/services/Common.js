import HTTP from "../utils/http"
import { API } from "../config/config"

export default class CommonService extends HTTP {
  changeStatus(data) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: API.CHANGE_STATUS,
        data,
        success(data) { resolve(data) },
        error(err) { alert('网络请求失败') },
      })
    })
  }
}