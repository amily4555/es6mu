import $_ from "../../mu.js";

/**
 * mu.or(Any ...item)
 * 比较  等同于  src === t1 || src === t2 || src === t3 ...
 * 只要有一项多true, 则返回true
 * @param items
 * @returns {boolean}
 *
 * exp.
 *
 * mu.or(1, '1', '01', '-1', 1)
 * // ->  true
 */

$_.or = (...items) => {
    if(items.length < 2){
       return new TypeError('must 2 params');
    }

    let src = items.shift();

    for(var i = 0, l = items.length; i < l; i ++){
        if(src === items[i]){
            return true;
        }
    }

    return false;

};

export default $_.or;
