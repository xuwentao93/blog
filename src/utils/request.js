import axios from 'axios'
import qs from 'qs'

const request = axios.create({
  timeout: 5000,
  baseURL: 'http://101.200.149.75:3000',
  headers: {
    'Content-type': 'application/x-www-form-urlencoded'
  }
})

request.interceptors.request.use(config => {
  if (config.methods == 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
},
  err => {
    console.log(err)
  })

  export default request