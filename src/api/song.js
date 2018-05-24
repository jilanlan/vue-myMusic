import { commonParams, options } from './config'
import axios from 'axios'
// 自己写的代理请求歌曲详细数据（vkey）
export function getSong (mid) {
  const url = '/api/music'
  const data = Object.assign({}, commonParams, {
    songmid: mid,
    filename: 'c400' + mid + '.m4a',
    guid: 2815866649,
    platform: 'yqq',
    loginUin: 0,
    hostUin: 0,
    needNewCode: 0,
    g_tk: 5381,
    uin: 0,
    cid: 205361747,
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function getLyric(mid) {
  const url = '/api/lyric'

  const data = Object.assign({}, commonParams, {
    songmid: mid,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    categoryId: 10000000,
    pcachetime: +new Date(),
    format: 'json',
    g_tk: 5381
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
