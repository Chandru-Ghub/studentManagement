const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({

    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,

    }
},{
    timestamps:true,
})

module.exports = mongoose.model('studentData', studentSchema)