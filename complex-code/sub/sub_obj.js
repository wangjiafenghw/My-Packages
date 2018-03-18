const obj = require('./object_date');
class sub_obj{
    constructor(){

    }
    // 生成一个随机数0-61
    init_random() {
        var num = parseInt(Math.random() * 62);
        if (num < 10) {
            return '0' + num
        } else {
            return num.toString()
        }
    };
    // 数字对应的字母
    init_str(arr) {
        var temp = [];
        for (var i = 0; i < arr.length; i++) {
            temp.push(obj[arr[i]]);
        }
        return temp;
    };
    // 超出61的数字，进行减去61
    init_overNum(arr) {
        var arr_num = [];
        for (var i = 0; i < arr.length; i++) {
            if (Number(arr[i]) > 61) {
                if (Number(arr[i]) - 61 < 10) {
                    arr_num.push('61', (Number(arr[i]) - 61).toString());
                } else {
                    arr_num.push('61', (Number(arr[i]) - 61).toString());
                }
            } else {
                arr_num.push(arr[i]);
            }
        }
        return arr_num;
    };
    // 将时间戳转为字符串数组
    init_arr(arr) {
        var new_arr = []
        for (var i = 0; i < arr.length; i = i + 2) {
            if (arr[i] && arr[i + 1]) {
                new_arr.push(arr[i] + arr[i + 1]);
            } else {
                if (!arr[i] || !arr[i + 1]) {
                    new_arr.push(arr[i] + "0")
                }
            }
        }
        new_arr.push(this.init_random())
        return new_arr;
    }
}

module.exports=new sub_obj;