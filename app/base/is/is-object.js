import $_ from '../../mu';
import $type from '../type';

/**
 * mu.isObject(Any any)
 * @param any
 * @returns {*}
 */
$_.isObject = function(/**{Any}*/ any) {
    return $type(any, 'object');
};

export default $_.isObject;
