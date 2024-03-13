const express = require('express')
const cors = require('cors')
const port = 3400
const app = express()
const mongoose = require('mongoose')
const userSchema = require('./model/student')
const subjectSchema = require('./model/subjects')
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('Student management system')
})

app.listen(port,(err)=>{
    if(err) return console.log('Something wrong while connecting')
    console.log('Server running on port '+port)
})

mongoose.connect('mongodb+srv://chandruinfo455:NgIcXt5f2klPsILS@cluster0.esdrc8z.mongodb.net/studentmangement')
.then(res => console.log('Database connected'))
.catch(err => console.log(err))

app.post('/create',(req,res)=>{
    const {name,email} = req.body
    console.log(req.body)
    userSchema.create({name,email})
    .then((a)=> {
        console.log('create')
        res.json(a)
    })
    .catch(err => console.log(err))
})

app.post('/addmarks',(req,res)=>{
    const{english,physics,chemistry,maths,studentId} = req.body
    console.log(req.body)
    subjectSchema.create({physics,maths,chemistry,english,studentId})
    .then(data =>{console.log(data) 
        res.json('Marks added sucessfully')
    })
    .catch(err => console.log(err))

})

app.get('/getdata',(req,res)=>{
    userSchema.find().then(data => {
        res.json(data)
    })
    .catch(err => console.log(err))
})

app.get('/getmarks',(req,res)=>{
    subjectSchema.findOne().then(data => {
        res.json(data)
    })
    .catch(err => console.log(err))
})