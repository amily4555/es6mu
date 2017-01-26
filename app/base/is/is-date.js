import $_ from '../../mu';
import $type from "../type";

/**
 * mu.isDate(Any any)
 * @param any
 * @returns {boolean}
 */

$_.isDate = function(/**{any}*/ any) {
    return $type(any, 'date');
};

export default $_.isDate;

