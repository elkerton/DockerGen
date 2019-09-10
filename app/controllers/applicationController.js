var ResponseMessage = require('../models/responseMessage');

class ApplicationController{
    static async healthCheck(req, res){
        var message = new ResponseMessage("online", "Application is running!", null);
        res.json(message.toJson());
    }
}

module.exports = ApplicationController;