import $_ from "../../mu";
import $type from "../type";
import $run from '../condition/run';
import $clone from './clone';

$_.each = function(isCopy, obj, fn, context) {

    if(!$type(arguments[0], 'boolean')) {
        isCopy = false;
        obj = arguments[0];
        fn = arguments[1];
        context = arguments[2];
    }

    let i = 0;

    $run(isCopy, ()=>{
        obj = $clone(obj);
    });

    switch($type(obj)) {
        case 'number':
            while(i < obj) {
                if(fn.call(context, i + 1, i, obj) === false) {
                    break;
                }

                i++;
            }
            break;
        case 'array':
        case 'string':

            for(var l = obj.length; i < l; i++) {
                if(fn.call(context, obj[i], i, obj) === false) {
                    break;
                }
            }

            break;
        case 'object':

            // 兼容IE9 以下, 不能枚举的属性手动重定义的元素 propertyIsEnumerable 不能判断
            // propertyIsEnumerable 判断给定的属性是否可以用 for...in 语句进行枚举
            // hasOwnProperty(property) 判断对象是否有某个特定的属性。必须用字符串指定该属性
            // !!! 不考虑 {toString: null}.propertyIsEnumerable('toString') === false 的情况
            for(i in obj) {
                if(obj.hasOwnProperty(i)) {
                    if(fn.call(context, obj[i], i, obj) === false) {
                        break;
                    }
                }
            }

            break;
    }
};

export default $_.each;



