//定义公共的方法的地方，使用 module.exports 暴露出去
module.exports = {
   phone: function(phone){
        if(!/^(13[0-9]|15[0|1|2|3|6|7|8|9]|18[0-9]|177)\d{8}$/.test(phone)){
            return false;
        }
        return true;
    }
}