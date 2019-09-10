class ResponseMessage{
    constructor(status, message, error){
        this.status = status;
        this.message = message;
        this.error = error;
    }


    toJson(){
        return {status : this.status, message: this.message, error : this.error};
    }
}

module.exports = ResponseMessage;