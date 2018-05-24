import {getLyric} from 'api/song'
import {ERR_OK} from 'api/config'
import {Base64} from 'js-base64'
export default class Song {
  constructor ({id, mid, singer, name, album, duration, image, url}) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }

  getLyric () {
    if (this.lyric) {
      return Promise.resolve(this.lyric)
    }
    return new Promise((resolve, reject) => {
      getLyric(this.mid).then((res) => {
        if (res.retcode === ERR_OK) {
          this.lyric = Base64.decode(res.lyric)
          resolve(this.lyric)
        } else {
        }
      })
    })
  }
}
export function createSong (musicData, key) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    url: `http://dl.stream.qqmusic.qq.com/C400${musicData.songmid}.m4a?vkey=${key}&guid=2815866649&uin=0&fromtag=66`
  })
}

export function createDiscSong (item) {
  return new Song({
    id: item.id,
    album: item.album.name,
    duration: item.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.album.mid}.jpg?max_age=2592000`,
    mid: item.mid,
    name: item.name,
    singer: filterSinger(item.singer),
    url: `http://dl.stream.qqmusic.qq.com/C400003OUlho2HcRHC.m4a?vkey=9DEE44F8F6F2FD26B9A65F42C33F7C967FE06C54BD2DE16E768BC27081EA1EB9E8A6E6963452477FF301D083DE7C3013F1F3A58FC3C0505B&guid=2815866649&uin=0&fromtag=66`
  })
}
 function filterSinger (singer) {
  let ret = []
  if (!singer) {
    return ''
  }
  singer.forEach((s) => {
    ret.push(s.name)
    // 歌手不只一个的时候用'/'隔开
  })
  return ret.join('/')
}
