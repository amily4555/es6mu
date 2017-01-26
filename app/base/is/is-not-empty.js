import $_ from '../../mu';
import $isEmpty from './is-empty'

$_.isNotEmpty = (any) => {
    return !$isEmpty(any);
};

export default $_.isNotEmpty;