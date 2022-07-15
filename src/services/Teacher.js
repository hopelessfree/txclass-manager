import HTTP from "../utils/http"
import { API } from "../config/config"

export default class TeacherService extends HTTP {
  getTeacherData() {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: API.GET_TEACHER_DATA,
        success(data) { resolve(data) },
        error(err) { alert('网络请求失败') },
      })
    })
  }

  selectStarTeacher(data) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: API.SELECT_STAR_TEACHER,
        data,
        success(data) { resolve(data) },
        error(err) { alert('网络请求失败') },
      })
    })
  }
}