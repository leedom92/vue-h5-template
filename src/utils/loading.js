import { showLoadingToast, closeToast } from 'vant'
import 'vant/lib/popup/index.css'
import 'vant/lib/toast/index.css'

const setLoading = (loading, message = '加载中...') => {
  if (loading) {
    showLoadingToast({
      message,
      duration: 0,
      forbidClick: true,
      loadingType: 'spinner',
    })
  } else {
    closeToast()
  }
}

export default setLoading
