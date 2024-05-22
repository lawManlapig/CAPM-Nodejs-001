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


//Direct (parang in-line declaration)
module.exports = function(service){
    service.on("lawFunction", function(lawReq,lawRes){
        return "Hello," + lawReq.data.msg;
    })
}