const _toString = Object.prototype.toString // 所有基本类型，对象都有toString

export function toRawType(value) {
  return _toString.call(value).slice(8, -1) // 获取参数的数据类型。
}

export function dateFormat(time = Date.parse(new Date())) { // !! 这个函数还需要在修改一下.让他可以返回不同的值.
  const date = new Date(time)
  const year = date.getFullYear()
  const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  const day = date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()
  const hour = date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours()
  const minute = date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()
  const second = date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds()
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}