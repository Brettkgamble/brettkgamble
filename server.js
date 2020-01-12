//New for Auth 0
require ('dotenv').config();
const http = require('http');
const session = require('express-session');
const axios = require ('axios');

// Dependencies
const passport = require('passport');
const uid = require('uid-safe');

// existing
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const userJSON = require('./user.json');
const serverAuth = require('./serverAuth');

app.prepare()
    .then(() => {
        const server = express();

        server.get('/api/users', serverAuth.authJWT, (req, res) => {
            // axios.get('https://jsonplaceholder.typicode.com/users')
            //     .then(response => {
            //         return res.json(response.data);
            //     })
            return res.json(userJSON);
        });

        server.get('/users/profile/:id', (req, res)=>{
            const actualPage = '/users/profile';
            const queryParams = { userId: req.params.id, hello: 'hey'};
            app.render(req, res, actualPage, queryParams);
        });

        // handle everything else
        server.get('*',(req, res)=>{
            return handle(req, res)
        });

        server.use(function (err, req, res, next){
            if (err.name === 'UnauthorizedError') {
                res.status(401).send({ error: 'Invalid Token'});
            }
        });

        server.listen(3000, (err)=> {
            if(err) throw err;
            console.log('> Ready on port http://localhost:3000');
        });
    }).catch ((ex)=>{
        console.error(ex.stack);
        process.exit(1);
});
