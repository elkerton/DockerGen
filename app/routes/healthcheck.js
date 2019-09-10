var applicationController = require('../controllers/applicationController');

module.exports = (app) => {
    app.get('/healthcheck', applicationController.healthCheck);
}