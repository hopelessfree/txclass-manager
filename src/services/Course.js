import HTTP from "../utils/http"
import { API } from "../config/config"

export default class CourseService extends HTTP {
  getCourseData() {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: API.GET_COURSE_DATA,
        success(data) { resolve(data) },
        error(err) { alert('网络请求失败') },
      })
    })
  }

  getCourseFieldData() {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: API.GET_COURSE_FIELD_DATA,
        success(data) { resolve(data) },
        error(err) { alert('网络请求失败') },
      })
    })
  }

  changeCourseField(data) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: API.CHANGE_COURSE_FIELD,
        data,
        success(data) { resolve(data) },
        error(err) { alert('网络请求失败') },
      })
    })
  }
}