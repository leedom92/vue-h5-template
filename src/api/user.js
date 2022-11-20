import request from '_u/request'

export function login(params) {
  return request({
    loading: true,
    url: '/login',
    methods: 'post',
    params
  })
}
