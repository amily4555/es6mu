import $_ from '../../mu.js';

/**
 * mu.and(Any src, Any t1....tn)
 * 比较  等同于  src === t1 && src === t2 && src === t3 ...
 * 只要有一项多false, 则返回false
 * @param items
 * @returns {boolean}
 *
 * exp.
 *
 * mu.and(1, '1', '01', '-1', 1)
 * // ->  false
 */

$_.and = (...items) => {
    if(items.length < 2){
        return new TypeError('must 2 params');
    }

    let src = items.shift();

    for(var i = 0, l = items.length; i < l; i ++){
        if(src !== items[i]){
            return false;
        }
    }

    return true;

};

export default $_.and;
