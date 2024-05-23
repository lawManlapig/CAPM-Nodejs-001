//Sample Function
// const srvHello = function(service){
//     //Event
//     //<import parameter>.<event>(<Function Name>, function(<request>,<response>))
//     service.on("lawFunction",function(lawReq,lawRes){
//         return "hello, " + lawReq.data.msg;
//     });
// };
//mandatory - Export your function
// module.exports = srvHello;

// const EmailValidation = require("email-validator");

//Direct (parang in-line declaration)
module.exports = function(service){
    service.on("lawFunction", function(lawReq,lawRes){
        return "Hello," + lawReq.data.msg;
    })
}

//Usage of NPMJS Modules
const BaseValidation = require("capval");
module.exports = class BeginCheckInput extends BaseValidation{
    isValid(InputValue){
        var students = this.getNode();
        // var field = this.Field;

        if (students.firstName !== "law")
        {
            return false;
        }
        return true;
    }
};