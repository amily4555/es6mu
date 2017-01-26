/**
 * __iffn(fn[, ...args])
 * @param {*} fn
 * @param {...*} args
 * @returns {*}
 */
let __iffn = (fn, ...args) => {
    return typeof fn === 'function' ? fn(...args) : fn;
};

export default __iffn;
