import $_ from '../../mu.js';
import $each from '../collection/each';
import $isNotExist from '../is/is-not-exist';
import $type from '../type';
import __splitKeys from '../private/__splitKeys'

/**
 * mu.touch(Collection ct, String prop)
 * 获得对象属性信息(未创建属性值, 则创建)
 * 类似 linxu 的touch 命令
 * @param ct
 * @param prop: 对象的链式属性扁平化值
 * @param val: 对该对象属性未创建, 则创建并赋值
 * @return {{number}} 赋值是否成功 ::-> 1 赋值成功, -1 赋值失败, 该对象已存在, 0 赋值失败, 该对象不能设置属性(路径中断)
 */

/**
 * ex.
 *
 * let obj = {a:123, b: {}, c: function(){}, d: { e: 1234 }}
 *
 * mu.touch(obj, 'f.h.j', 'test')
 * //-> 1 (赋值成功)
 * //:> obj = {a:123, b: {}, c: function(){}, d: { e: 1234 }, f:{ h: { j: 'test' }}}
 *
 * mu.touch(obj, 'a.h.j', 'test')
 * //-> 0 (赋值失败, 该对象不能设置属性(路径中断))
 * //:> obj = {a:123, b: {}, c: function(){}, d: { e: 1234 }}
 *
 * mu.touch(obj, 'b', 'test')
 * //-> -1 (赋值失败, 该对象已存在)
 * //:> obj = {a:123, b: {}, c: function(){}, d: { e: 1234 }}
 */
$_.touch = function(/**{collection}*/ ct, /*{string}*/ prop, /**{any}*/ val) {
    if(!$type(ct, 'object')){
        return 0;
    }

    let rst = ct;
    prop = __splitKeys(prop);

    for(let i = 0, l = prop.length; i < l; i ++){
        let k = prop[i];
        let isBottom = i === (l - 1);

        if($type(rst[k], 'object')){
            rst = rst[k];
            if(isBottom){
                return -1;
            }
        } else if($isNotExist(rst[k])) {
            if(isBottom){
                rst[k] = val;
                return 1;
            } else {
                rst[k] = {};
                rst = rst[k];
            }
        } else {
            return 0
        }
    }
};

export default $_.touch;
