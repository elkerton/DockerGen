class Dockerfile{
    constructor(lang, version, portApplication, portServer = null, startCommand, extraCommands){
        this.lang = lang;
        this.version = version;
        this.portApplication = portApplication;
        this.portServer = portServer;
        this.startCommand = startCommand;        
        this.extraCommands = extraCommands;        
    }

    generate(){
        var ports = this.portServer ? `${this.portApplication}:${this.portServer}` : `${this.portApplication}:${this.portApplication}`
        
        return `FROM ${this.lang}:${this.version}
                COPY . . 
                PORT ${ports}
                ${this.getExtraCommands()}
                ENTRYPOINT ${this.startCommand}`
    }

    getExtraCommands(){
        var commands = "";

        this.extraCommands.forEach(command => {
            commands += `CMD ${command}\n`  
        });

        return commands;
    }
}

module.exports = Dockerfile;