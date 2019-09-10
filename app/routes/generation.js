var generationController = require('../controllers/generationController')

module.exports = (app) => {
    app.post('/generate/dockerfile', generationController.generateDockerfile);
}