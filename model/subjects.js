const mongoose = require('mongoose')

const subjectSchema = mongoose.Schema({

    english:{
        type:String,
        require:true,
    },
    maths:{
        type:String,
        require:true,

    },
    physics:{
        type:String,
        require:true,

    },
    chemistry:{
        type:String,
        require:true,

    },
    studentId:{
        type:String,
        require:true,
    }
},{
    timestamps:true,
})

module.exports = mongoose.model('subject', subjectSchema)