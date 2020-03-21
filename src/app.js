const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.get('/accounts', (req, res) => fs.readFile("./data.json", 'utf-8', (err, data)=>{
    if(err){
        res.status(500).send()
    }else {
        res.send(JSON.parse(data))
    }
}))

asyncReadFile = function(path) {
    return new Promise(
        function(resolve, reject) {
            fs.readFile(path, 'utf-8', function(err, data){
                if(err) {
                    reject(err)
                }
                resolve(data)
            })
        }).catch(err => {
            err
        })
}

const createAccount = (req, res) => {
    const newAccount = req.body
    const file = await asyncReadFile('./data.json')
    const accounts = JSON.parse(file)
    // if (accounts.filter(v))
}

app.post('/accounts', createAccount)

app.listen(port, () => console.log(`Our serve has been setup, and listen on the port:
${port}!`))

exports.app = app