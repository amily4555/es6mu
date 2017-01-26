import $_ from '../../mu';
import $isExist from './is-exist';
import $isPlainObject from './is-plain-object';

/**
 * mu.isArrayLike(Any any)
 * 一切看起来像数组的东西(arguments, node 等)
 * @param any
 *
 * PS. copy underscore
 */

/**
 * exp.
 * 数组 and 伪数组对象
 *
 * mu.isArrayLike({length: 100})
 * //-> false
 *
 * mu.isArrayLike([])
 * //-> true
 *
 * mu.isArrayLike(document.querySelectorAll('div'))
 * //-> true
 *
 * mu.isArrayLike(arguments)
 * //->true
 */


$_.isArrayLike = function(/**{Any}*/ any) {
    let MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
    let length = $isExist(any) && typeof any === 'object' && !$isPlainObject(any) && any.length;
    return typeof length === 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
};

export default $_.isArrayLike;
