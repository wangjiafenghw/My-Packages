const obj = require('./object_date');
const sub_obj = require('.//sub_obj')
class main {
    constructor() {

    }
    // 根据毫秒数改为数字大小写字母的类型
    istime() {
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
    // 根据类型判断
    notime(leng, type) {
        switch (type) {
            case "num":
                return this.num_random(leng);
                break;
            case "string":
                return this.all_string(leng);
                break;
            case "all":
                return this.all(leng);
                break;
            default:
                return "错误参数";
                break;
        }
        return this.num_random(leng, type);
    };
    // 字母数字混合:有可能重复
    all(leng) {
        var str = [];
        var time = this.get_date(53);
        var duan = 0;
        if (0 <= time < 62) {
            duan = 1;
        } else {
            duan = 0;
        }
        for (var i = 0; i < leng - duan; i++) {
            if (i == 0) {
                var num = parseInt(Math.random() * 62);
                str.push(obj[num]);
            } else {
                var strs = str[i - 1];
                var num = Number(obj[strs]);
                var a = this.no_equa(num, 62);
                str.push(obj[a])
            }
        }
        str.push(obj[time])
        return str.join("");
    }
    // 大小字母
    all_string(leng) {
        var str = [];
        var time = this.get_date(53);
        var duan = 0;
        if (0 <= time < 53) {
            duan = 1;
        } else {
            duan = 0;
        }
        for (var i = 0; i < leng - duan; i++) {
            if (i == 0) {
                var num = parseInt(Math.random() * 53) + 10;
                str.push(obj[num]);
            } else {
                var strs = str[i - 1];
                var num = Number(obj[strs]);
                var a = this.no_equa(num, 53) + 10;
                str.push(obj[a])
            }
        }
        str.push(obj[time])
        return str.join("");
    };
    // 数字
    num_random(leng) {
        var six = [];
        var time = this.get_date(10);
        for (var i = 0; i < leng - (time.length); i++) {
            if (i == 0) {
                six.push(parseInt(Math.random() * 10))
            } else {
                six.push(this.no_equa(six[i - 1], 10))
            }

        }
        for (var i = 0; i < (time.length > leng ? leng : time.length); i++) {
            six.push(Number(time[i]))
        }
        return six.join("");
    }
    // 获取当前时间
    get_date(leng) {
        var time = new Date().getTime();
        var time_arr = time.toString().split("");
        var count = 0;
        for (var i = 0; i < time_arr.length; i++) {
            count = count + Number(time_arr[i])
        }
        if (leng <= 10) {
            return count.toString().split("");
        } else {

            return count.toString();
        }

    }
    // 判断前后相邻是否相等
    no_equa(item, len) {
        var rand = parseInt(Math.random() * len);
        if (item == rand) {
            return this.no_equa(item, len);
        } else {
            return rand
        }
    }
}
module.exports = new main;