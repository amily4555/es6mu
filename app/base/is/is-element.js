import $_ from '../../mu';
import $isPlainObject from './is-plain-object';

/**
 * mu.isElement(Any any)
 * 判断该对象是否 element
 * @param any
 * @returns {boolean}
 */
$_.isElement = function(/**{any}*/ any) {
    return !!(any && any.nodeType === 1) && !$isPlainObject(any);
};

export default $_.isElement;
