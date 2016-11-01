var express = require('express');
var router = express.Router();

var soap = require('soap-server');

function MyTestService(){
}
MyTestService.prototype.test1 = function(myArg1, myArg2){
    return myArg1 + myArg2;
};

var soapServer = new soap.SoapServer();
var soapService = soapServer.addService('testService', new MyTestService());


module.exports = router;
