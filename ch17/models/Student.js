import mongoose from "mongoose";

// Defining Schemas

const studentSchema = new mongoose.Schema({

    name:{type:String,required:true,trim:true},
    age:{type:Number,required:true,min:18,max:50},
    fees:{type:mongoose.Decimal128,required:true,validate: (v)=>
        v >= 999},
   hobbies:{type:Array},
   isactive:{type:Boolean},
   comments:[{value:{type:String},publish:{type:Date,default:Date.now}}],
   join:{type:Date,default:Date.now}

})


// path function for knowing about field 
console.log( studentSchema.path('age'))

// compiling schema

const studentModel = mongoose.model('student',studentSchema)

//  collection ka naam kuchbhi likho last mai s lagake dega vo