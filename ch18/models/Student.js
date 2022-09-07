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
// console.log( studentSchema.path('age'))




// compiling schema

const studentModel = mongoose.model('student',studentSchema)

//  collection ka naam kuchbhi likho last mai s lagake dega vo


// creating new document

// const createDoc = async()=>{
//     try {

//         const studentDoc = new studentModel({

//             name:"Ankit G Mishra",
//             age : 21,
//             fees: 9999,
//             hobbies:['geopolitics','singing','reading','playing Guitar '],
//             isactive:true,
//             comments:[{value:'This is good Mongoose'}]
          
//           })
          
//           // Saving document
          
//           const result = await studentDoc.save()
//           console.log(result)
        
//     } catch (error) {
//         console.log(error)
//     }
// }


const createDoc = async(nm,ag,fe,hob,isact,comt)=>{
    try {

        const studentDoc = new studentModel({

            name:nm,
            age : ag,
            fees: fe,
            hobbies:hob,
            isactive:isact,
            comments:comt
          
          })
          
          // Saving document
          
          const result = await studentDoc.save()
          //for inserting multiple doc 
        //   const result = await studentModel.insertMany([mention all])

          console.log(result)
        
    } catch (error) {
        console.log(error)
    }
}

export default createDoc