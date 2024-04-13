import { showLoadingToast, closeToast } from 'vant'

const setLoading = (loading, message = '加载中...') => {
  let showLoading = null
  if (loading) {
    showLoading = showLoadingToast({
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
