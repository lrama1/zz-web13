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

const itemtypes = require('./ItemTypes.json')
app.get('/gen-web/itemtypes', (req, res) =>{
    return res.json(itemtypes)
})
app.get('/gen-web/itemtype/:itemTypeId', (req, res) =>{
    const returnVal = jsonQuery('rows[itemTypeId=' + req.params.itemTypeId + ']',{data: itemtypes})
    return res.json(returnVal.value)
})
const itemattributetypes = require('./ItemAttributeTypes.json')
app.get('/gen-web/itemattributetypes', (req, res) =>{
    return res.json(itemattributetypes)
})
app.get('/gen-web/itemattributetype/:itemAttrTypeId', (req, res) =>{
    const returnVal = jsonQuery('rows[itemAttrTypeId=' + req.params.itemAttrTypeId + ']',{data: itemattributetypes})
    return res.json(returnVal.value)
})
const itemattrtypedatatypes = require('./ItemAttrTypeDatatypes.json')
app.get('/gen-web/itemattrtypedatatypes', (req, res) =>{
    return res.json(itemattrtypedatatypes)
})
app.get('/gen-web/itemattrtypedatatype/:itemAttrTypeDatatypeCode', (req, res) =>{
    const returnVal = jsonQuery('rows[itemAttrTypeDatatypeCode=' + req.params.itemAttrTypeDatatypeCode + ']',{data: itemattrtypedatatypes})
    return res.json(returnVal.value)
})
app.listen(8000)
console.log('Listening on port 8000')