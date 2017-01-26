import $_ from "../../mu";
import $type from "../type";
import $each from './each';

/**
 * mu.extend([Boolean isDeep,] Object src, Object ...target)
 * 将src的属性覆盖到target上，若有相同的属性，会完全覆盖
 * target 从后向前覆盖
 * @param isDeep 是否深层覆盖
 * @param src
 * @param target...
 * @returns {{object}}
 *
 * exp.
 *
 * mu.extend({a:{d: 2}, b:2}, {a:{e:3}, c:4})
 * // -> {a:{e:3}, b:2, c:4}
 *
 * mu.extend(true, {a: {d: 2}, b:2}, {a:{e:3}, c:4})
 * // -> {a:{d:2, e:3}, b:2, c:4}
 *
 * mu.extend({}, {}, {}...)
 */
$_.extend = function(isDeep, src, target) {
    let args = [...arguments];
    if($type(arguments[0], 'boolean')) {
        isDeep = args.shift();
    } else {
        isDeep = false;
    }

    src = args[0];

    if(typeof src !== 'object') {
        return src;
    }

    $each(args, (target)=> {
        $each(target, (o, key) => {
            if(isDeep) {
                if(typeof o === 'object') {
                    if($type(src) !== $type(o)) {
                        src[key] = $_.extend(true, $type.origin(o), o);
                    } else {
                        src[key] = $_.extend(true, src[key] || $type.origin(o), o);
                    }
                } else {
                    src[key] = o;
                }
            } else {
                if(src[key] !== o) {
                    src[key] = o;
                }
            }

        });

    });

    return src;
};

export default $_.extend;



