/**
 * __splitKeys(path:String)
 * 对象扁平化路径分割属性值
 * @param path
 * @return {Array}
 * @private
 * @form http://codereview.stackexchange.com/questions/62997/javascript-path-parsing/63010#63010
 */

/**
 * ex.
 *
 * __splitKeys('element.0.[1].subElement["Hey!.What?"]["[hey]"]')
 * //-> ["element", "0", "1", "subElement", "Hey!.What?", "[hey]"]
 */
let __splitKeys = (/**{string}*/ path) => {
    let re = /\[("|'|)(.*?)\1\]|([^.\[\]]+)/g;
    let keys = [];
    let rst;
    while ((rst = re.exec(path)) !== null) {
        keys.push(rst[2] || rst[3]);
    }
    return keys;
};

export default __splitKeys;
