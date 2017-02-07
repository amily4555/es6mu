import $_ from "../../mu.js";

/**
 * mu.camel(str:string)
 * 将'-'式命名方式改为驼峰式
 * @param str
 * @return {*}
 */

/**
 * ex.
 * mu.camel('mu-util-tool')
 * //-> muUtilTool
 */
$_.camel = (/**{string}*/ str)=> {
    return str.replace(/-([a-z])/g, (a)=>{
        return a[1].toUpperCase();
    });
};

export default $_.camel;
