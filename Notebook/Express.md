## express

```javascript
const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req, res) => res.send('Hello world!'))

app.use(express.static(path.join(__dirname, 'public')))

// setup an error handler
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

// handle 404 responses
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})

app.listen(3000, () => console.log('xxx listening on port 3000.'))
```

#### Route parameters
```
Route path: /flights/:from-:to
Request URL: http://localhost:3000/flights/LAX-SFO
req.params: { "from": "LAX", "to": "SFO" }
```

#### template engines

```javascript
app.set('views', './views')
app.set('view engine', 'pug')
```

