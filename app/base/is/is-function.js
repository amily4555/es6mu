import $_ from '../../mu';

/**
 * mu.isFunction(T any)
 * @param any
 * @returns {boolean}
 */
$_.isFunction = (any) => {
    return  typeof any === 'function';
};

export default $_.isFunction;
