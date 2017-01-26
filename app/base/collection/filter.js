import $_ from '../../mu';
import $type from '../type';
import $each from './each';

/**
 * mu.filter(Collections ct, Function fn)
 * @param {Array | Object} ct
 * @param fn
 * @returns {*}
 */
$_.filter = function(ct, fn) {
    let rst = $type.origin(ct);

    $each(ct, (v, i)=> {
        if(fn(v, i)){
            $type(ct, 'array') ? rst.push(v) : (rst[i] = v);
        }
    });

    return rst;
};

export default $_.filter;
