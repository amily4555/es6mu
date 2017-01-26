import $_ from "../mu.js";

/**
 * mu.pipe(Function ...fns)
 * 管道机制
 * 即前一个函数的输入, 是前一个函数的输出
 * @param {...function} fns
 * @returns {function(*=)}
 */

/**
 * ex.
 *
 * let plus = (a, b) => a + b;
 * let multi = (c) => c * 100;
 *
 * mu.pipe(plus, multi)(3, 5)
 * // (3 + 5) * 100
 * // -> 800
 */

$_.pipe = (...fns) => {
    return (...val) => {
        return fns.reduce((a, b, i) => {
            if(i) {
                return b(a);
            } else {
                return b(...a);
            }
        }, [...val]);
    };
};

export default $_.pipe;
