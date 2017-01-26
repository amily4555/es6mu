import $_ from '../../mu';

$_.isNotExist = function(any) {
    return any === undefined || any === null;
};

export default $_.isNotExist;
