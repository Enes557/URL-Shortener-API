const express = require('express')
const db = require('quick.db')
var udb = new db.table('urldb');
const app = express()
const port = 3000
app.listen(port, () => {
  console.log(`Uygulama ${port} portunda başlatıldı`)
})

app.get('/api/url/save/', (req, response) => {
      const error = { code: 'invalid', url: 'invalid'}
      const error2 = { code: 'invalid', url: 'Lütfen Geçerli Bir Link Girin'}
    if(!req.query.u) return response.json(error)
    if(req.query.u.substr(0, 4) != "http") return response.json(error2) //http-s kontrol
    var randomstr = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    udb.set(randomstr, req.query.u);
  const json = { code: randomstr, url: req.query.u}
response.json(json)
})

app.get('/api/url/get/', (req, response) => {
    const error = { code: 'invalid', url: 'invalid'}
    if(!req.query.u || !udb.fetch(req.query.u)) return response.json(error)
  const json = { code: req.query.u, url: udb.get(req.query.u)}
response.json(json)
})

