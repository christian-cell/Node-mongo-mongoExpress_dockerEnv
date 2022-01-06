const express = require('express');
const registerFormRoutes = require('./routes/registerForm');
const cors = require('cors');

const server = express();

// const userRegisterRoutes = require('./routes/userRoutes');

server.use(express.static('public'));
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended:false}));


require('./db');
server.use('/userRegister', registerFormRoutes);
server.listen(3000);

console.log(`server listening on port 3000`)