"use strict";
exports.__esModule = true;
var camelcase_1 = require("camelcase");
var uuid = require("shortid");
/**
 * 唯一名称生成器
 */
var KeyStore = /** @class */ (function () {
    function KeyStore() {
        this.keys = {};
    }
    /**
     * 根据传入名称，生成唯一值
     * @param {String} name 名称
     * @param {Function} format 格式化方法
     */
    KeyStore.prototype.generate = function (name, format) {
        if (!name)
            return KeyStore.uuid();
        var count = this.keys[name];
        if (count === undefined) {
            count = '';
            this.keys[name] = 1;
        }
        else
            this.keys[name] = count + 1;
        var rtnStr = "" + name.toLowerCase() + count;
        return typeof format === 'function' ? format(rtnStr) : rtnStr;
    };
    /**
     * 生成uuid
     */
    KeyStore.uuid = function () {
        return uuid.generate();
    };
    KeyStore.format = {
        /**
         * 格式化为驼峰结构
         * @param {*} str
         */
        camelCase: function (str) {
            return camelcase_1["default"](str);
        }
    };
    return KeyStore;
}());
exports["default"] = KeyStore;
