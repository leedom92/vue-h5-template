import request from '_u/request'

export function login(params) {
  return request({
    loading: true,
    url: '/login',
    method: 'post',
    params,
  })
}
