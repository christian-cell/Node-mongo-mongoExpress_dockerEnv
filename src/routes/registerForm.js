const express = require('express');
const userRegisterRouter = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const authenticateJWT = require('../middlewares/authentication');
const RegisterForm = require('../models/Registerform');

/* const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const authenticateJWT = require('../middelwares/authentication');
const RegisterForm = require('../models/RegisterForm');
const registerFormRouter = express.Router();
const fs = require('fs-extra');
const cloudinary = require('cloudinary').v2; */


userRegisterRouter.get('/saludo' ,(req ,res)=>{
    res.send('hello users , YOUR ARE CODING AS PROS DO , creating the same environment for your partnerts')
})

////////////////////////////////register route/////////////////////////////////////////////////////////////
userRegisterRouter.post('/register', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const address = req.body.address;
    const phoneNumber = req.body.phoneNumber;

    bcrypt.hash(password, saltRounds, function (err, hash) {
        const registerForm = new RegisterForm;

        registerForm.firstName = firstName;
        registerForm.lastName = lastName;
        registerForm.email = email;
        registerForm.password = hash;
        registerForm.address = address;
        registerForm.phoneNumber = phoneNumber;

        registerForm.save()
            .then((newRegisterForm) => {
                res.json(newRegisterForm)
            })
            .catch((error) => {
                res.status(500).send(error);
            })
    })
})

userRegisterRouter.get('/', (req, res) => {
    RegisterForm.find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
        .then((datoUsuario) => {
            res.set("Content-type", "application/json; charset=utf-8")
                .send(JSON.stringify({ datoUsuario }, null, 2));
        }).catch((err) => {
            res.status(500).send(err)
        })
})

userRegisterRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    RegisterForm.find({ _id: id }, { __v: 0, createdAt: 0, updatedAt: 0 })
        .then((datoUsuario) => {
            res.send(datoUsuario)
        }).catch((err) => {
            res.status(500).send(err)
        })
})

module.exports = userRegisterRouter;
