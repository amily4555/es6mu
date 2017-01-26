import $_ from '../../mu';

/**
 * mu.isExist(* any)
 * 判断对象是否存在
 * @param {*} any
 */

/**
 * exp.
 * 假值: 使用if或!!运算符得出结果为 false 的值
 * 不纯在的值: null || undefined
 * 空值: 假值, 空数组, 0, 空对象
 *
 * mu.isExist({})
 * //-> true
 *
 * mu.isExist([])
 * //-> true
 *
 * mu.isExist('   ')
 * //-> true
 *
 * mu.isExist(0)
 * //-> true
 *
 * mu.isExist(false)
 * //-> true
 *
 * mu.isExist(null)
 * //-> false
 *
 * mu.isExist(undefined)
 * //-> false
 *
 */
$_.isExist = function(/**{Any}*/ any) {
    return !(any === null || any === undefined);
};

export default $_.isExist;
