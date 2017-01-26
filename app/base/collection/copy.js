import $_ from "../../mu";
import $type from "../type";
import $extend from './extend';

/**
 * mu.copy(Any src)
 * 浅拷贝
 * @param src
 * @returns {{any}}
 */

$_.copy = function(src) {
    if(typeof src !== 'object'){
        return src;
    }

    return $type(src, 'array') ? src.slice() : $extend({}, src);
};

export default $_.copy;
