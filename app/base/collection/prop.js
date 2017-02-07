import $_ from '../../mu.js';
import $each from '../collection/each';
import $isEmpty from '../is/is-empty';
import __splitKeys from '../private/__splitKeys'

/**
 * mu.prop(Collection ct, String prop)
 * 获得对象属性信息(未有属性值为undefined)
 * @param ct
 * @param prop: 对象的链式属性扁平化值
 * @return {{collection}}
 */
$_.prop = function(/**{collection}*/ ct, /*{string}*/ prop) {
    let rst = ct;
    prop = __splitKeys(prop || '');

    $each(prop, (v, k)=> {
        rst = rst[v];
        if($isEmpty(rst)){
            return false;
        }
    });

    return rst;
};

export default $_.prop;
