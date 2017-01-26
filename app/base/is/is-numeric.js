import $_ from '../../mu';

$_.isNumeric = function(any) {
    return isNaN(parseFloat(any)) && isFinite(any);
};

export default $_.isNumeric;
