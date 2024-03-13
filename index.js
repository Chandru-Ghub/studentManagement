const express = require('express')
const cors = require('cors')
const port = 3400
const app = express()
const mongoose = require('mongoose')
const router = express.Router()
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


// create student detail

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

// update student

app.delete('/delete/:id',(req,res)=>{
    const id = req.params.id
    userSchema.findByIdAndDelete(id)
    .then(a => res.json('student data has been deleted!'))
    .catch(err => console.log(err))
})
// add marks

app.post('/addmarks',(req,res)=>{
    const{english,physics,chemistry,maths,studentId} = req.body
    console.log(req.body)
    subjectSchema.create({physics,maths,chemistry,english,studentId})
    .then(data =>{
        console.log(data)
        res.json('Marks added sucessfully')
    })
    .catch(err => console.log(err))

})

// get students

// app.get('/getdata',(req,res)=>{
//     var students = []
//     userSchema.find().then(data => {
//                 data.map((a)=>{
//                     subjectSchema.findOne({studentId:a._id})
//                 .then(result => {
//                     let output = {student:a,score:result}
//                     students.push(output)
//                 })
//                 .catch(err => console.log(err))
//                 })
//         console.log(students)
//         res.json(students)
//     })
//     .catch(err => console.log(err))
// })