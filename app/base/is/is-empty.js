import $_ from '../../mu';
import $type from '../type';
import $isEmptyObject from './is-empty-object';
import $isDateLike from './is-date-like';

/**
 * mu.isEmpty(Any any)
 * 判断对象是否为空值
 * @param {*} any
 * @param {boolean} reversal: 反转方法结果
 */

/**
 * exp.
 * 假值: 使用if或!!运算符得出结果为 false 的值
 * 不纯在的值: null || undefined
 * 空值: 假值, 空数组, 0, 空对象
 *
 * mu.isEmpty({})
 * //-> true
 *
 * mu.isEmpty([])
 * //-> true
 *
 * mu.isEmpty('   ')
 * //-> true
 *
 * mu.isEmpty(0)
 * //-> true
 *
 * mu.isEmpty('0')
 * //-> true
 *
 * mu.isEmpty('00')
 * //-> false !!!
 *
 * mu.isEmpty(false)
 * //-> true
 *
 * mu.isEmpty(null)
 * //-> true
 *
 * mu.isEmpty(undefined)
 * //-> true
 *
 */

$_.isEmpty = function(/**{Any}*/ any) {
    var rst = !any;

    if(!rst) {
        switch($type(any)) {
            case 'string':
                var s = any.replace(/(^\s*)|(\s*$)/g, '');
                rst = s.length === 0 || s === '0';
                break;
            case 'array':
                rst = any.length === 0;
                break;
            case 'object':
                rst = $isEmptyObject(any);
                break;
            case 'date':
                rst = !$isDateLike(any);
                break;
        }
    }

    return rst;
};

export default $_.isEmpty;
