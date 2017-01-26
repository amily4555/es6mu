import $_ from '../../mu';

/**
 * mu.isBaseType(T any)
 * 判断对象是否为基本类型
 * 基本类型： null, undefined, string, number, boolean
 * @param {*} any
 * @returns {boolean}
 */
$_.isBaseType = function(/**{any}*/ any) {
    return Object(any) !== any;
};

export default $_.isBaseType;
