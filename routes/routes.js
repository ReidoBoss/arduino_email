module.exports = (app) => {
    const router = require('express').Router();
    const multer = require('multer');
    const storage = multer.memoryStorage();
    const upload = multer({ storage: storage });

    const controller = require('../controllers/controllers.js');





    // POSTERS
    router.post('/sendMail', upload.fields([]), controller.sendMail);


    app.use('/', router);
};