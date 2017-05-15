import axios from 'axios'

export default {
  get: (param)=>{
    axios({
      url: param.url,
      method: param.method,
    })
    .then(function (res) {
      param.callback(res)
    })
  },
  post: (param)=>{
    axios({
      url: param.url,
      method: param.method,
      data: param.data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(function (res) {
      param.callback(res)
    })
  }
}
