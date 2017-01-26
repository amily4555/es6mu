import $_ from '../../mu.js';
import __iffn from '../private/__iffn';
import $isNotEmpty from '../is/is-not-empty';

/**
 * mu.run(condition, truefn, falsefn)
 * @param {*} condition, condition 判断的条件遵从运算符 if
 * @param {*} truefn
 * @param {*} falsefn
 * @returns {*}
 */

/**
 * ex.
 *
 *   mu.run(function(){
 *       ...conditon...
 *   })
 *
 *   mu.run(con, function(con){
 *       ...condition...
 *   })
 *
 *   mu.run(con, 'if ture', 'if else')
 */
$_.run = function(condition, truefn, falsefn) {
    let rst =  __iffn(condition);

    if(arguments.length === 1){
        return rst;
    }

    return $isNotEmpty(rst) ? __iffn(truefn, rst) : __iffn(falsefn, rst);
};

export default $_.run;
