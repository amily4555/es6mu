import $_ from '../mu';
import $isElement from './is/is-element';

/**
 * mu.type(Any any[, String type])
 * 获得参数的数据类型 / 判断参数的数据类型
 * @param {*} any
 * @param {string} type: 'string', 'number', 'array', 'date', 'regex', 'function', 'object'
 */
$_.type = function(any, type) {

    if(type){
        return type === $_.type(any);
    }

    // vaild undefined and null
    if(any === null || any === undefined) {
        return String(any);
    }

    if(any.nodeType === 1){
        return 'element';
    }

    var reg = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/;
    var typeMap = Object.prototype.toString.call(Object(any));
    typeMap = reg.exec(typeMap);

    type = typeMap ? typeMap[1].toLowerCase() : any.callee ? 'arguments' : $isElement(any) ? 'element' : 'object';

    return type;

};

/**
 * 获得对象类型的初始值
 * @param src
 */
$_.type.origin = function(src) {
    return {
        'string': '',
        'number': 0,
        'date': new Date(0),
        'regex': new RegExp(),
        'object': {},
        'array': [],
        'function': function(){}
    }[$_.type(src)] || src;

};

export default $_.type;


