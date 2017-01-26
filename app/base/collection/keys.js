import $_ from '../../mu';

/**
 * mu.keys(Collections ct)
 * @param {Array | Object} ct
 * @returns {*}
 */
$_.keys = function(ct) {
    if(Object.keys){
        return Object.keys(ct);
    }

    var k = [], p;
    for(p in ct) {
        if(Object.prototype.hasOwnProperty.call(ct, p)) {
            k.push(p);
        }
    }

    return k;
};

export default $_.keys;
