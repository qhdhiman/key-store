import camelCase from 'camelcase'
import uuid from 'shortid'

/**
 * 唯一名称生成器
 */
export default class KeyStore {

  static format = {
    /**
     * 
     * @param {*} str 
     */
    camelCase (str) {
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
  generate(name, format) {
    if (!name) return this.uuid()

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
  uuid () {
    return uuid.generate()
  }

}