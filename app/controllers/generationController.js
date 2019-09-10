var Dockerfile = require('../models/dockerfile');

class GenerationController{
    static async generateDockerfile(req, res){
        var lang = req.body.lang;
        var version = req.body.version;
        var portApplication = req.body.portApplication;
        var portServer = req.body.portServer;
        var startCommand = req.body.startCommand;
        var extraCommands = req.body.extraCommands;

        var dockerfile = new Dockerfile(lang, version, portApplication, portServer, startCommand, extraCommands);
    
        res.send(dockerfile.generate());
    }
}

module.exports = GenerationController;