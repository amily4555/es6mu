import $_ from "../../mu.js";

/**
 * mu.leftpad(String s, Int l[, String symbol])
 * 左侧补全字符串
 * @param s
 * @param {number} l: 输出字符串长度
 * @param symbol
 * @returns {{string}}
 */
$_.leftpad = function(/**{string}*/ s, /**{int}*/ l, /**[string]*/ symbol){
    symbol = symbol || '0';
    s = String(s);
    while(s.length < Math.abs(l)){
        s = symbol + s;
    }

    return s.substr(-l, l);
};

export default $_.leftpad;
