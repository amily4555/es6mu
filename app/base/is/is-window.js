import $_ from '../../mu';

/**
 * mu.isWindow(Object win)
 * 判断一个对象是否是为window对象
 * @param win
 * @returns {*|boolean}
 */
$_.isWindow = function(/**{object}*/ win) {
    return !!(win && win === win.window);
};

export default $_.isWindow;
