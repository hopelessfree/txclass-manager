import HTTP from "../utils/http";
import { API } from "../config/config";

export default class RecomCourseService extends HTTP {
  getRecomCourseData() {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: API.GET_RECOM_COURSE_DATA,
        success(data) { resolve(data) },
        error() { alert('网络请求失败') }
      })
    })
  }
}