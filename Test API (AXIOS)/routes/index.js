const r = require('express').Router()
const Briva = require('../controllers/briva')

r.get('/aku', Briva.getBriva)
r.post('/aku', Briva.postBriva)

module.exports = r