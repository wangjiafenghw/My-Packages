class sub{
    constructor() {

    };
    get_date() {
        var time = new Date().getTime();
        var time_arr = time.toString().split("");
        var count = 0;
        for (var i = 0; i < time_arr.length; i++) {
            count = count + Number(time_arr[i])
        }
        return count.toString().split("");
    }
    no_equa(item) {
        var rand = parseInt(Math.random()*10);
        if (item == rand) {
            return this.no_equa(item);
        } else {
            return rand
        }
    }
}
module.exports=new sub;