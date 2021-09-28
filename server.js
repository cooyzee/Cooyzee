const express = require('express')
const server = express()

let path = require('path')

// express.static 是Express内置的唯一一个中间件，负责托管静态资源
server.use(express.static(path.join(__dirname, 'dist')))

server.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'))
})

server.listen(3000, () => {
  console.log(`Cooyzee start listening on port ${server.address().port}, good luck.`)
})
