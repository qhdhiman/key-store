import camelCase from 'camelcase'
import * as uuid from 'shortid'

/**
 * 唯一名称生成器
 */
export default class KeyStore {

  keys: Array<[string, number]>

  static format = {
    /**
     * 格式化为驼峰结构
     * @param {*} str
     */
    camelCase (str: string) {
      return camelCase(str)
    }
  }

  constructor () {
    this.keys = []
  }
  /**
   * 根据传入名称，生成唯一值
   * @param {String} name 名称
   * @param {Function} format 格式化方法
   */
  generate(name?: string, format?: Function) {
    if (!name) return KeyStore.uuid()

    let exist = this.keys.filter(item => item[0] === name)[0]
    let rtnStr = name
    if (exist === undefined) {
      this.keys.push([name, 1])
    } else {
      let count = exist[1]
      rtnStr = `${name.toLowerCase()}${count}`
      exist[1] = count + 1
    }
    return typeof format === 'function' ? format(rtnStr) : rtnStr
  }

  /**
   * 生成uuid
   */
  static uuid () {
    return uuid.generate()
  }

}