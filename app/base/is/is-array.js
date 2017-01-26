import $_ from '../../mu';

/**
 * mu.isDateLike({*} any)
 * 判断是否为组成标准时间格式的字符创或时间戳
 * @param {*} any
 * @returns {boolean}
 */
$_.isDateLike = function(any){
    var d = new Date(any);
    return d.toString() !== 'Invalid Date';
};

export default $_.isDateLike;
