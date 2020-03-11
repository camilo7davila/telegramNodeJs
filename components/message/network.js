const express = require('express');
const multer = require('multer');
const path = require('path');
const response = require('../../network/response');
const controller = require('./contoller');

const router = express.Router();
// const upload = multer({
//     dest: 'public/files/',
// })

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/files/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '.jpg') //Appending .jpg
    }
})

const upload = multer({ storage: storage })

router.get('/', (req, res) => {
    const filterMessage = req.query.user || null
    controller.getMessage(filterMessage).then((messageList) => {
        response.success(req, res, messageList, 200)
    }).catch((e) => {
        response.error(req, res, 'Ocurrio error obteniendo info', 500)
    })
})

router.post('/', upload.single('file'), (req, res) => {
    console.log(req.file);
    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file).then((fullMessage) => {
        response.success(req, res, fullMessage, 201)
    }).catch((e) => {
        response.error(req, res, 'Información invalida', 400)
        console.log(req.body);
    })
})

router.patch('/:id', (req, res) => {
    console.log(req.params.id);
    controller.updateMessage(req.params.id, req.body.message).then((data) => {
        response.success(req, res, data, 200);
    }).catch((e) => {
        response.error(req, res, 'Error interno', 500)
    });
})

router.delete('/:id', (req, res) => {
    controller.deleteMessage(req.params.id).then((data) => {
        response.success(req, res, `Usuario ${req.params.id} eliminado`, 200);
    }).catch(e => {
        console.log(req.params.id)
        response.error(req, res, 'Error interno', 500)
    })
})

module.exports = router;
