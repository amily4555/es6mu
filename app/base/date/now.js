import $_ from '../../mu.js';

$_.now = Date.now || function(){
        return + new Date();
    };

export default $_.now;
