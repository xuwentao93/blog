const _toString = Object.prototype.toString //所有基本类型，对象都有toString

export function toRawType(value) {
  return _toString.call(value).slice(8, -1) //获取参数的数据类型。
}