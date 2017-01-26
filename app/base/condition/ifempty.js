import $_ from "../../mu.js";
import __iffn from "../private/__iffn";
import $isEmpty from "../is/is-empty";


/**
 * exp.
 *
 * var p;
 *
 * mu.ifempty(p, 'mu.js')
 * //-> mu.js
 *
 * p = 'MU';
 *
 * mu.ifempty(p, 'mu.js)
 * //-> MU
 *
 * mu.ifempty(p, 'mu.js', function(src, target){
     *  return src + '.JS';
     * }
 * //-> MU.JS
 *
 * mu.ifempty('', 'mu.js')
 * //-> mu.js
 *
 * mu.ifempty(false, 'mu.js')
 * //-> mu.js
 *
 * mu.ifempty([], 'mu.js')
 * //-> mu.js
 *
 */
$_.ifempty = function(condition, truefn, falsefn) {
    return $isEmpty(condition) ? __iffn(truefn, condition) : __iffn(falsefn, condition);
};

export default $_.ifempty;
