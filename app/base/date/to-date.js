import $_ from '../../mu.js';
import $run from '../condition/run';
import $map from '../collection/map';
import $each from '../collection/each';
import $dateFormat from './date-format';
import $ifnvl from '../condition/ifnvl';

/**
 * mu.toDate(Boolean isFormat, String src, String simulate)
 * 史上最强的字符串转时间方法
 * @param isFormat
 * @param src: 任何包含时间的字符串 (时间为数字) or 正规的时间表达式
 * @param simulate: 模拟时间表达式 || 'yyyy-MM-dd HH:mm:ss.SSS'
 * @param format
 * @returns {Date}
 */

/**
 * exp.
 *
 * mu.dateFormat(mu.toDate('我们将于2017年1月27号18点30分放假', 'yyyy-MM-dd HH:mm'), 'yyyy-MM-dd HH:mm:ss.SSS')
 * // 两个时间类型字符串中间可使用[ -:./]来进行分割
 * // -> "2017-01-27 18:30:00.000"
 *
 * mu.dateFormat(mu.toDate('我们将于2017年1月27号 做好5次QA测试完成率达到80%后, 18点30分放假', 'yyyy-MM-dd ~ ~ HH:mm'), 'yyyy-MM-dd HH:mm:ss.SSS')
 * // 'yyyy-MM-dd x x HH:mm' 如果字符串出现非时间数字, 请用占位符('~'或非时间字母, !!!不能使用其他字符)
 * // -> "2017-01-27 18:30:00.000"
 *
 * mu.toDate('10/11/2013 01:00 pm', 'yyyy-MM-dd HH:mm')
 * // 符合标准的时间格式的字符串直接转换为时间类型, 并按照模拟时间表达式给出结果
 * // -> "Fri Oct 11 2013 13:00:00 GMT+0800 (CST)
 *
 * mu.toDate('10/11/2013 01:00 pm', 'yyyy-MM-dd')
 * // -> "Fri Oct 11 2013 00:00:00 GMT+0800 (CST)"
 *
 * mu.toDate('20170127183000.000', 'yyyyMMddHHmmss.SSS')
 * // -> Fri Jan 27 2017 18:30:00 GMT+0800 (CST)
 *
 * -- 黑功能, 获得今天 0 点 0 分 0 秒 --
 * mu.toDate( new Date(), 'yyyy-MM-dd' )
 * // -> Thu Jan 26 2017 00:00:00 GMT+0800 (CST)
 */
$_.toDate = function(/**{string}*/ src, /**string*/ simulate = 'yyyy-MM-dd HH:mm:ss.SSS') {

    let __src__ = src;
    __src__ = new Date(__src__);
    if(__src__.toString() !== 'Invalid Date') {
        src = $dateFormat(__src__, 'yyyy-MM-dd HH:mm:ss.SSS');
    }

    let __simulate__ = simulate.split(/[ -./:]/);
    let srcArr = src.replace(/([^ 0-9:.])/g, '-')
        .replace(/-+/g, '-')
        .split(/[ -./:]/);

    srcArr = $map(srcArr, (v) => {
        if(v === null || v === undefined || v === '') {
            return '__BREAK__';
        } else {
            return parseInt(v);
        }
    });

    let c = {};
    $each(srcArr, function(v, i) {

        $run(__simulate__[i], (key)=> {

            // 将字符串按照不同字符出现顺序分组, 如连续重复则归为一组
            // /([a-zA-Z])\1*/g ::: 匹配重复字母
            // ~ 为占位符
            // yyyyMMdds
            // -> [yyyy, MM, dd, s]
            let ds = key.match(/([a-zA-Z~])\1*/g);
            let ds_len = ds.length;

            if(ds_len>1){
                // 将一个时间类型组转为一个分组正则表达式, 对一个连续时间表达式进行分组
                // 20131211
                // -> [\d{4}, \d{2}, \d{2}]
                // -> (\d{4})(\d{2})(\d{2})

                let i = 0;
                let reg = $map(ds, (val)=>{
                    i = i + val.length;

                    if(i > ds_len){
                        return `(\\d{0,${val.length}})`;
                    } else {
                        return `(\\d{${val.length}})`;
                    }

                }).join('');

                reg = new RegExp(reg);

                // 获得时间分组;
                // '20131211'.match(/(\d{4})(\d{2})(\d{2})/)
                // 0:-> 20131211
                // 1:-> [20131211, 2013, 12, 11]
                // 2:-> [2013, 12, 11]

                // 0:->
                v = '' + v;

                // 1:->
                let vs = v.match(reg) || [];

                // 2:->
                vs.shift();

                // 时间匹配对应关系入库 c
                $each(vs, (d, i)=> {
                    c[ds[i]] = parseInt(d || 0);
                });
            }else {
                c[key] = parseInt(v || 0);
            }

        });
    });

    let t = {
        yyyy: 1970,
        MM: 1,
        dd: 1,
        HH: 0,
        mm: 0,
        ss: 0,
        SSS: 0
    };

    let d = mu.extend(t, c);

    d.MM = $ifnvl(d.MM, 1);
    d.yyyy = $ifnvl(d.yyyy, 0);

    let dd = new Date();
    dd.setFullYear(d.yyyy);
    dd.setMonth(d.MM - 1);
    dd.setDate(d.dd);
    dd.setHours(d.HH);
    dd.setMinutes(d.mm);
    dd.setSeconds(d.ss);
    dd.setMilliseconds(d.SSS);

    return dd;
};

export default $_.toDate;

