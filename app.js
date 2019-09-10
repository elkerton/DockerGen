let app = require('./config/express')();

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Application started running in port: " + port);
})