import $_ from '../../mu.js';
import $leftpad from '../string/leftpad';
import $type from '../type';
import $each from '../collection/each';

/**
 * mu.dateFormat()
 * 各种类型的值, 格式化成字符串
 * @param {date || number || string} src
 * @param {string} dateformat
 * @returns {*}
 *
 * exp.
 *
 * mu.dateFormat( new Date(1458114893684),  'yyyy年MM月dd日 HH:mm:ss SS 第q季度 星期w')
 * // -> "2016年03月16日 15:54:53 684684 第1季度 星期3"
 *
 * mu.dateFormat( 1458114893684,  'yy年M月d日 h:m:s SS 第q季度 星期w')
 * // -> "16年3月16日 15:54:53 684 第1季度 星期3"
 *
 * mu.dateFormat( 1458114893684,  'MM ~M dd ~d')
 * // 时间字符可以使用'~'防止被替换
 * // -> "03 M 16 d"
 */
$_.dateFormat = function(/**{any}*/ src, /**{string}*/ dateformat = 'yyyy-MM-dd') {

    if(!$type(src, 'date')) {
        src = new Date(src);
        if(src.toString() === 'Invalid Date') {
            return src;
        }
    }

    var y = src.getFullYear(),
        M = src.getMonth() + 1,
        q = Math.ceil(M / 3),
        w = src.getDay(),
        d = src.getDate(),
        H = src.getHours(),
        m = src.getMinutes(),
        s = src.getSeconds(),
        S = src.getMilliseconds();

    var dateVals = [
        {u: '|~yyyy', key: 'yyyy', unkey: '', val: y},
        {u: '|~yyyy|~yy|~y', key: 'yy', val: $leftpad(y % 100, 2)},
        {u: '|~q', key: 'q', val: q},
        {u: '|~MM', key: 'MM', val: $leftpad(M, 2)},
        {u: '|~MM|~M', key: 'M', val: M},
        {u: '|~w', key: 'w', val: w},
        {u: '|~dd', key: 'dd', val: $leftpad(d, 2)},
        {u: '|~dd|~d', key: 'd', val: d},
        {u: '|~HH', key: 'HH', val: $leftpad(H, 2)},
        {u: '|~HH|~H', key: 'H', val: H},
        {u: '|~mm', key: 'mm', val: $leftpad(m, 2)},
        {u: '|~mm|~m', key: 'm', val: m},
        {u: '|~ss', key: 'ss', val: $leftpad(s, 2)},
        {u: '|~ss|~s', key: 's', val: s},
        {u: '|~SSS', key: 'SSS', val: $leftpad(S, 3)}
    ];

    $each(dateVals, function(o) {

        let reg = `${o.key}${o.u}`;
        reg = new RegExp(reg, 'g');

        dateformat = dateformat.replace(reg, (k)=> {
            if(k === o.key) {
                return o.val;
            } else {
                if(o.key.length > 1 && o.key !== 'yy') {
                    return k;
                } else {
                    return k.replace('~', '')
                }
            }
        });
    });

    return dateformat;
};

export default $_.dateFormat;
