import HTTP from "../utils/http";
import { API } from "../config/config";

export default class SliderService extends HTTP {
  getSliderData() {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: API.GET_SLIDER_DATA,
        success(data) { resolve(data) },
        error() { alert('网络请求失败') }
      })
    })
  }
}