const main = require('./sub/main');
class short_url_random {
    constructor(time) {

    };
    // 初始化，核心
    code(leng, type, time) {
        if (arguments.length == 1) {
            time = leng;
        }
        if (time) {
            console.log(main.istime())
            // return main.istime();
        } else {
            if (leng < 2) {
                return "It can't be less than 2"
            } else {
                console.log(main.notime(leng, type))
                // return main.notime(length,type);
            }
        }
    };

}
module.exports = new short_url_random;