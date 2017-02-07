import $_ from '../../mu.js';
import $run from '../condition/run';
import $isObject from '../is/is-object';
import $noop from './noop';

/**
 * mu.bind(fn:function, context:object, ...params:any)
 * 固定fn函数的作用域为context, 不管函数是否变为构造函数或重新赋值,改变作用域
 * @param fn
 * @param context
 * @param params
 */
$_.bind = function(/**{function}*/ fn, /**{object}*/ context, /**{any}*/ ...params) {
    let nativeBind = Function.prototype.bind;
    return $run(nativeBind && nativeBind === fn.bind, function() {
        return nativeBind.apply(fn, [context, ...params]);
    }, function() {

        var bound = function(...boundArgs) {
            // 绑定参数传递
            let args = params.concat(boundArgs);

            // 普通function绑定
            if(!(this instanceof bound)) {
                return fn.apply(context, args);
            }

            var Ctor = $noop;
            Ctor.prototype = fn.prototype;
            var self = new Ctor();
            Ctor.prototype = null;
            var rst = fn.apply(self, args);
            if($isObject(rst)) {
                return rst;
            }
            return self;
        };

        return bound;
    });
};

export default $_.bind;
