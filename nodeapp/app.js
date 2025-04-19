const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.send('Hello World from app2')
  })
  
  app.listen(port, () => {2
    console.log(`Example app listening at http://localhost:${port}`)
  })
