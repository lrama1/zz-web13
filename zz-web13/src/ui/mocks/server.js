const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const jsonQuery = require('json-query')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const questions = require('./Questions.json')

app.get('/zz-web13/questions', (req, res) =>{
    return res.json(questions)
})

app.get('/zz-web13/question/:questionId', (req, res) =>{
    const returnVal = jsonQuery('rows[questionId=' + req.params.questionId + ']',{data: questions})
    return res.json(returnVal.value)
})

app.listen(8000)
console.log('Listening on port 8000')