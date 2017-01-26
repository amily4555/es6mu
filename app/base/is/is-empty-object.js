import $_ from '../../mu';

/**
 * mu.isEmptyObject(Any any)
 * 空对象
 * @param obj
 */
$_.isEmptyObject = function(/**{Any}*/ obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key)) {
            return false;
        }
    }

    return true;
};

export default $_.isEmptyObject;