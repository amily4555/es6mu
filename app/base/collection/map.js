import $_ from "../../mu";
import $type from "../type";
import $each from './each';
import $clone from './clone';

$_.map = function(obj, fn, src) {

    if(!(obj && fn && typeof fn === 'function')){
        return obj
    }

    let rst;
    if(src) {
        rst = $clone(src);
    } else {
        rst = $type.origin(obj)
    }

    $each(obj, function(v, k) {
        var cb = fn(v, k, obj);

        if(cb === '__BREAK__' || cb === '__remove_map__'){

        }else{
            if($type(rst, 'object')) {
                if(cb && cb.__key__) {
                    rst[cb.__key__] = cb.__val__;
                } else {
                    rst[k] = cb;
                }
            } else {
                rst[rst.length] = cb;
            }
        }

    });

    return rst;

};

export default $_.map;
