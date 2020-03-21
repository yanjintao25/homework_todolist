const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hi World!'))



app.listen(port, () => console.log(`Our serve has been setup, and listen on the port:
${port}!`))