import $_ from '../../mu';
import $type from '../type';
import $keys from './keys';

/**
 * mu.length(Collections ct)
 * 返回对象的长度(或属性的个数)
 * @param {Array | Object} ct
 * @returns {number}
 */
$_.len = function(ct) {
    switch( $type(ct) ){
        case 'array':
        case 'string':
        case 'function':
            return ct.length;
        case 'number':
            return ct.toString().length;
        case 'object':
            return $keys(ct).length;
        default:
            return void 0;
    }
};

export default $_.len;
