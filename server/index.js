const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())
app.use(express.static('public'));

app.get('/test.js', (req, res) => {
  console.log("Receiving test.js request");
  console.log(req.url)
  console.log(req.headers)
  res.sendFile(__dirname + '/test.js');
})

app.get('*', (req, res) => {
  console.log("Receiving unhandled request");
  console.log(req.url)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})