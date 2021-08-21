const config = require('../../config/index');
const express = require('express');
const proxy = require('express-http-proxy')

const app = express()

app.use('/api/dogs', proxy(
    `http://localhost:${config.get('ports').dogs}`,
    {
        proxyReqPathResolver: (req) => {
            return `http://localhost:${config.get('ports').dogs}/api/breed${req.url}`
        }
    }

));

app.use('api/storage', proxy(
    `http://localhost:${config.get('ports').storage}`,
    {
        proxyReqPathResolver: (req) => {
            return `http://localhost:${config.get('posts').storage}/api/storage${req.url}`
        }
    }
));

