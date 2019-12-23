const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const jsonQuery = require('json-query')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const items = require('./Items.json')

app.get('/gen-web/items', (req, res) =>{
    return res.json(items)
})

app.get('/gen-web/item/:itemId', (req, res) =>{
    const returnVal = jsonQuery('rows[itemId=' + req.params.itemId + ']',{data: items})
    return res.json(returnVal.value)
})

app.listen(8000)
console.log('Listening on port 8000')