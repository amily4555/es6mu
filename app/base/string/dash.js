import $_ from "../../mu.js";

/**
 * mu.dash(str:string)
 * 将驼峰式字符串转为'-'连接方式
 * @param str
 * @return {*}
 */

/**
 * ex.
 * mu.dash('muUtilTool')
 * //-> mu-util-tool
 */
$_.dash = (/**{string}*/ str)=> {

    str = str.replace(/[A-Z]/g, (a)=>{
        return '-' + a.toLowerCase();
    });

    return str.replace(/^-/, '');
};

export default $_.dash;
