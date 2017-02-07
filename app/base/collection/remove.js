import $_ from '../../mu.js';
import $map from '../collection/map';

/**
 * mu.remove(Collection ct, Any condition)
 * @param ct
 * @param {number | string | function} condition
 */
$_.remove = function(/**{collection}*/ ct, /**{any}*/ condition) {
    let cb = typeof condition === 'function' ? condition : function(v, k) {
        return k === condition;
    };

    return $map(ct, function(v, k) {
        return cb.call(null, v, k) ? '__BREAK__' : v;
    });
};
