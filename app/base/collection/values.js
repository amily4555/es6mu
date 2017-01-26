import $_ from '../../mu';

/**
 * mu.values(Collections ct)
 * @param {Array | Object} ct
 * @returns {*}
 */
$_.values = function(ct) {
    if(Object.values){
        return Object.values(ct);
    }

    var k = [], p;
    for(p in ct) {
        if(Object.prototype.hasOwnProperty.call(ct, p)) {
            k.push(ct[p]);
        }
    }

    return k;
};

export default $_.values;
