import $_ from "../../mu.js";
import __iffn from '../private/__iffn';
import $isEmpty from '../is/is-empty';

/**
 * mu.empty
 * ~unrun
 * 如果condition 为空 -> truefn ::else falsefn
 * @param {*} condition : not function
 * @param {*} truefn
 * @param {*} falsefn
 * @returns {*}
 */

$_.empty = (condition, truefn, falsefn) => {
    return $isEmpty(condition) ? __iffn(truefn, condition) : __iffn(falsefn, condition);
};

export default $_.empty;
