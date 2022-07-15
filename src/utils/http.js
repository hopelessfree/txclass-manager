import axios from 'axios'
import qs from "qs"


export default class HTTP {
  axiosPost(options) {
    const { url, success, error } = options

    axios({
      url,
      method: 'post',
      withCredentials: true,
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(options.data),
      timeout: 1000 * 60,
    })
      .then((res) => {
        success(res.data)
      })
      .catch((err) => {
        error(err)
      })
  }

  axiosGet(options) {
    const { url, success, error } = options

    axios({
      url,
      method: 'get',
      withCredentials: true,
      timeout: 1000 * 60,
    })
      .then((res) => {
        success(res.data)
      })
      .catch((err) => {
        error(err)
      })
  }
}