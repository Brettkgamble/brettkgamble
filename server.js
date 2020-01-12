require ('dotenv').config();

// existing
const express = require('express');
const next = require('next');

const compression = require('compression');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const robotsOptions = {
    root: __dirname + '/static/',
    headers: {
        'Content-Type': 'charset-UTF-8'
    }
}

app.prepare()
    .then(() => {
        const server = express();
        server.use(compression());

        server.get('/robots.txt', (req, res) => {
            return res.status(200).sendFile('robots.txt', robotsOptions)
        });

        // handle everything else
        server.get('*',(req, res)=>{
            return handle(req, res)
        });

        const PORT = process.env.PORT || 3000;

        server.listen(PORT, (err)=> {
            if(err) throw err;
            console.log(`> Ready on port ${PORT}`);
        });

    }).catch ((ex)=>{
        console.error(ex.stack);
        process.exit(1);
});
