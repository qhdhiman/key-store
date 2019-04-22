import camelCase from 'camelcase'
import * as uuid from 'shortid'

/**
 * 唯一名称生成器
 */
export default class KeyStore {

  keys: object

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
    this.keys = {}
  }
  /**
   * 根据传入名称，生成唯一值
   * @param {String} name 名称
   * @param {Function} format 格式化方法
   */
  generate(name: string, format: Function) {
    if (!name) return KeyStore.uuid()

    let count = this.keys[name]
    if (count === undefined) {
      count = ''
      this.keys[name] = 1
    }
    else this.keys[name] = count+1
    let rtnStr = `${name.toLowerCase()}${count}`
    return typeof format === 'function' ? format(rtnStr) : rtnStr
  }

  /**
   * 生成uuid
   */
  static uuid () {
    return uuid.generate()
  }

}