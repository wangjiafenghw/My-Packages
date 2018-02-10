const sub=require('./sub/sub')
class six_code {
    constructor() {

    };
    code(){
        var six = [];
        var time=sub.get_date();
        
        for (var i = 0; i < 6 - (time.length); i++) {
            if (i == 0) {
                six.push(parseInt(Math.random() * 10))
            } else {
                six.push(sub.no_equa(six[i - 1]))
            }
        }
        for(var i=0;i<time.length;i++){
            six.push(Number(time[i]))
        }
        return six.join("");
    }
}
module.exports=new six_code;