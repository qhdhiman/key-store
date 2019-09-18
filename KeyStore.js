"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var camelcase_1 = require("camelcase");
var uuid = require("shortid");
/**
 * 唯一名称生成器
 */
var KeyStore = /** @class */ (function () {
    function KeyStore() {
        this.keys = [];
    }
    /**
     * 根据传入名称，生成唯一值
     * @param {String} name 名称
     * @param {Function} format 格式化方法
     * @param {Any} options 格式化方法 参数
     */
    KeyStore.prototype.generate = function (name, format) {
        var options = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            options[_i - 2] = arguments[_i];
        }
        if (!name)
            return KeyStore.uuid();
        var exist = this.keys.filter(function (item) { return item[0] === name; })[0];
        var rtnStr = name;
        if (exist === undefined) {
            this.keys.push([name, 1]);
        }
        else {
            var count = exist[1];
            rtnStr = "" + name.toLowerCase() + count;
            exist[1] = count + 1;
        }
        return typeof format === 'function' ? format.apply(void 0, __spreadArrays([rtnStr], options)) : rtnStr;
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
        camelCase: function (str, options) {
            return camelcase_1["default"](str, options);
        }
    };
    return KeyStore;
}());
exports["default"] = KeyStore;
