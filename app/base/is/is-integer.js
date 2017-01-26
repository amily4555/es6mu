import $_ from '../../mu';
import $isNumeric from './is-numeric';

/**
 * mu.isInteger(Any any)
 * 判断是否整数
 * @param any
 * @return {boolean}
 */
$_.isInteger = function(/**{any}*/ any){
    return $isNumeric(any) && any === parseInt(any);
};

export default $_.isInteger;
