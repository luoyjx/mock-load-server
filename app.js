const crypto = require('crypto')
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/cpu', (req, res) => {
  for (let i = 0; i<1000; i++) {
    const salt = crypto.randomBytes(128).toString('base64');
    const hash = crypto.pbkdf2Sync('some password string', salt, 10000, 512, 'sha512');
  }

  res.send('cpu done')
})

let arraytest = [];

app.get('/mem', (req, res) => {
  for (let i = 0; i < 1000; i++) {
    arraytest.push(new Array(1e6).fill('*').join());
  }

  res.send('mem done')
})

app.get('/net', async (req, res) => {
  for (let i = 0; i < 10000; i++) {
    res.write(new Array(1e4).fill('*').join())
    await new Promise((r) => setTimeout(r, 1))
  }

  res.end('net done')
})

setInterval(() => {
  if (arraytest.length > 5000) {
    arraytest = [];
    console.log('arraytest cleared')
  } else {
    console.log('arraytest length: ' + arraytest.length)
  }
}, 60 * 1000)

app.listen(3000)
