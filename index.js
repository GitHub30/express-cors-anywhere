const fetch = require('node-fetch')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.raw({ type: '*/*' }))

BLOCK_RESPONSE_HEADERS = [
    'content-encoding',
    'content-length'
]

app.use((req, res) => {
    const url = req.url.slice(1)
    if (!url) return res.redirect('https://github.com/GitHub30/express-cors-anywhere')
    delete req.headers.host
    const options = {
        method: req.method,
        headers: req.headers
    }
    if (typeof {} === 'object' && !!Object.keys(req.body).length) options.body = req.body
    fetch(url, options).then(r => {
        res.status(r.status)
        r.headers.forEach((v, n) => BLOCK_RESPONSE_HEADERS.includes(n) || res.setHeader(n, v))
        r.body.pipe(res)
    })
})

module.exports = app