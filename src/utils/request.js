import axios from 'axios'
import { Toast, Notify } from 'vant'
import 'vant/es/toast/style'
import 'vant/es/notify/style'

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
}

const baseURL = ''

// 创建axios实例
const service = axios.create({
  baseURL, // 接口地址
  // withCredentials: true, // 跨域请求时携带cookie
  timeout: 10000 // 超时时间
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 是否开启loading
    if (config.loading) {
      // loading
      Toast.loading({
        forbidClick: true,
        duration: 0 // 时长(ms)为0时，toast不会消失
      })
    }

    config.headers['Authorization'] = ''

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (+res.code === 200) {
      return res
    } else {
      Toast.clear()
      Notify({ type: 'danger', message: res.msg })
      return Promise.reject(new Error(res.msg || 'Error'))
    }
  },
  (error) => {
    Toast.clear()
    const { response } = error
    if (response && response.status) {
      const errorText = codeMessage[response.status] || response.statusText
      const { status } = response
      Notify({ type: 'danger', message: `请求错误 ${status}: ${errorText}` })
    } else if (!response) {
      Notify({ type: 'danger', message: '您的网络发生异常，无法连接服务器' })
    }
    return Promise.reject(error)
  }
)
export default service
