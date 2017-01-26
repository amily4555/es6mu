import $_ from '../../mu';
import $isObject from './is-object';

/**
 * mu.isPlainObject(Any any)
 * 判断一个any是否是一个纯对象 (通过 new Object 或 {})创建
 * @param obj
 */

/**
 * exp.
 * 只有纯对象(对象字面量)才为true
 *
 * mu.isPlainObject({})
 * //-> true
 *
 * mu.isPlainObject(window)
 * //-> false
 *
 * mu.isPlainObject(document)
 * //-> false
 *
 * mu.isPlainObject(null)
 * //-> false
 *
 * mu.isPlainObject(undefined)
 * //-> false
 *
 * var cls = new mu();
 * mu.isPlainObject(cls)
 * //-> false
 */

$_.isPlainObject = function(/**{Any}*/ obj) {
    if($isObject(obj)) {
        Object.getPrototypeOf || (Object.getPrototypeOf = function(obj) {
            return obj['__proto__'] || obj.prototype || (obj.constructor && obj.constructor.prototype) || Object.prototype;
        });

        return Object.getPrototypeOf(obj) === Object.prototype;
    }

    return false;
};


export default $_.isPlainObject;

