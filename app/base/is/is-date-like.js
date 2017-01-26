import $_ from '../../mu';

/**
 * mu.isDateLike(Any any)
 * 一切有效的可以转为日期格式的值(不包括 Invalid Date)
 * @param any
 * @returns {boolean}
 */

/**
 *  exp.
 *
 *  mu.isDateLike(1457948891718)
 *  //-> true
 *
 *  mu.isDateLike('abdde')
 *  //-> false
 */
$_.isDateLike = function(/**{any}*/ any) {
    var d = new Date(any);
    return d.toString() !== 'Invalid Date';
};

export default $_.isDateLike;
