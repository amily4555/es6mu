import $_ from "../../mu.js";

/**
 * mu.trim(String str, String position)
 * 去除字符串两端空格符
 * @param str
 * @param postion
 * @returns {*}
 */

$_.trim = function(/**{string}*/ str, /**{string}*/ postion = 'all'){
    var reg = {
        'all': /(^\s*)|(\s*$)/g,
        'left': /(^\s*)/g,
        'right': /(\s*$)/g
    };
    return str.replace(reg[postion] || '', '');
};

export default $_.trim;
