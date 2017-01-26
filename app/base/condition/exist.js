import $_ from "../../mu.js";
import __iffn from '../private/__iffn';
import $isExist from '../is/is-exist';

/**
 * mu.exist
 * 如果con 存在 -> inbox ::else outbox
 * @param {*} condition : not function
 * @param {*} truefn
 * @param {*} falsefn
 * @returns {*}
 */

$_.exist = (condition, truefn, falsefn) => {
    return $isExist(condition) ? __iffn(truefn, condition) : __iffn(falsefn, condition);
};

export default $_.exist;
