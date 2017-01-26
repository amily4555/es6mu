import $_ from "../../mu";

/**
 * mu.find(Array arr, Function fn[, Boolean isReverse]
 * @param arr
 * @param fn
 * @param isReverse 是否颠倒(从数组最后面向前寻找)
 * @returns {*}
 */
$_.find = function(arr, fn, isReverse) {

    if(isReverse){
        arr = arr.reverse();
    }

    for(let i = 0, l = arr.length; i < l; i++ ){
        if(fn(arr[i], i)){
            return arr[i];
        }
    }

    return undefined;
};

export default $_.find;
