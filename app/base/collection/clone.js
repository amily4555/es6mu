import $_ from "../../mu";
import $type from "../type";
import $extend from './extend';

/**
 * mu.copy(Any src)
 * 浅拷贝
 * @param src
 * @returns {{any}}
 */

$_.clone = function(src) {
    if(typeof src !== 'object'){
        return src;
    }

    return $extend(true, $type.origin(src), src);
};

export default $_.clone;
