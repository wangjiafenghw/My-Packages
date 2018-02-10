const obj = require('./sub/object_date');
const sub_obj=require('./sub//sub_obj')
class short_url_random {
    constructor(time) {

    };
    // 初始化，核心
    code() {
        var time = new Date().getTime();
        var init_arrs = time.toString().split("");
        // 时间戳改为字符串数组
        var arr_str = sub_obj.init_arr(init_arrs);
        // 减去处理后数组
        var arr_num = sub_obj.init_overNum(arr_str);
        // 转换后的数组
        var arr = sub_obj.init_str(arr_num);
        return arr.join("");
    };

}
module.exports = new short_url_random;