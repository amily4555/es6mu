import $_ from "../../mu.js";
import __iffn from "../private/__iffn";
import $isNotExist from "../is/is-not-exist";

/**
 * mu.ifnvl
 * 如果condition 不存在 -> truefn ::else:: falsefn
 * @param {*} condition : not function
 * @param {*} truefn
 * @param {*} falsefn
 * @returns {*}
 */

/**
 * ex.
 *
 * mu.ifnvl(abc, 'abc is undefiend or null')
 * // -> 'abc is undefiend or null'
 *
 * mu.ifnvl('abc', 'abc is undefiend or null', 'abc is exist')
 * // -> 'abc is exist'
 */

$_.ifnvl = function(condition, truefn, falsefn) {
    return $isNotExist(condition) ? __iffn(truefn, condition) : __iffn(falsefn || condition, condition);
};

export default $_.ifnvl;
