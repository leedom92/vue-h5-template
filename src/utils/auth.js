import Cookies from 'js-cookie'
import JSEncrypt from 'jsencrypt'

const TokenKey = 'token'
const UserIdKey = 'userid'

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setUserId(userid) {
  return Cookies.set(UserIdKey, userid)
}

export function getUserId() {
  return Cookies.get(UserIdKey)
}

/**
 * 字段加密
 * @param {*} field
 * @returns
 */
export function encryptedData(field) {
  // 自己的公钥
  const publicKey = `-----BEGIN PUBLIC KEY-----
                     AbCdEfGh
                 -----END PUBLIC KEY-----`
  // 新建JSEncrypt对象
  const encryptor = new JSEncrypt()
  // 设置公钥
  encryptor.setPublicKey(publicKey)
  // 加密数据
  return encryptor.encrypt(field)
}
