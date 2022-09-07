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

const studentModel = mongoose.model('student',studentSchema)

// retrieving all document 

const getAllDoc  = async() =>{

const result = await studentModel.find()
console.log(result)
result.forEach(

    (item) =>console.log(
        item.name,
        item.age,
        item.fees.toString(),
        item.hobbies[0],
        item.hobbies[1],
        item.join

    )
 )

}


const getAllDocSpecificField  = async() =>{

    // -----------Include Ways ---

    // const result = await studentModel.find().select('name age') // include 
    // const result = await studentModel.find().select(['name', 'age']) // include 
    // const result = await studentModel.find().select({name:1, age:1}) // include 

    // -----------Exclude Ways ---

    //   const result = await studentModel.find().select('-name -age') // exclude 
    //  const result = await studentModel.find().select(['-name', '-age']) // exclude 
        //  const result = await studentModel.find().select({name:0, age:0}) 

 //  Another way - 

         const result = await studentModel.find({},'name age')

    console.log(result)
 
}

// retrieve single doc 
const getSingleDoc = async() =>{
    //retrieving data with help of ID 
    const result = await studentModel.findById("6314a3b5b25c0d794ee6653c")
    console.log(result.name,result.age,result.fees.toString())
}

// retrieve single doc with specific field
const getSingleDocSpecificField = async() =>{
    //retrieving data with help of ID 
    const result = await studentModel.findById("6314a3b5b25c0d794ee6653c",'name age')
    console.log(result)
}

//  Retrieve Document By Field 

const getDocByField = async()=>{
    const result = await studentModel.find({name:'Ankit G Mishra'})
    console.log(result[0].name,result[0].age)

}

//  retrieving limited doc

const getLimitedDoc = async () =>{

    // const result = await studentModel.find().limit(2)
    // another way of writing 

    const result = await studentModel.find({},null,{limit:2})

    console.log(result)

}

const getDocCount = async () =>{
    const result = await studentModel.find().countDocuments()
    console.log(result)
}


// Sort Documents 

const getSortedDoc = async () =>{
    // const result = await studentModel.find().sort({age:1}) for ascending order

    // const result = await studentModel.find().sort({age:-1}) for descending order 
    // console.log(result)
}

const mixDoc = async () =>{
    
    const result = await studentModel.find({},{name:1,age:1},{limit:5,skip:1})
    console.log(result)

}

//  Comparison Query Operator

const compDoc  = async() =>{

    // const result = await studentModel.find({age:{$gt:22}}) // Greater than 

    // const result = await studentModel.find({age:{$gte:22}}) // Greater than equal to 

    // const result = await studentModel.find({age:{$lt:22}}) // less then

    // const result = await studentModel.find({age:{$lte:22}}) // less then Equal too

    // Not Equal Eg 
    // const result = await studentModel.find({age:{$ne:22}}) // Not Equal to

    const result = await studentModel.find({age:{$in:[21,22]}}) // less then

    console.log(result)

}


//  Logical Query Operator !

const logDoc  = async() =>{

    // const result = await studentModel.find({$and:[{age:21},{fees:9999}]}) // define data age & fees dono rhega same tou vo show hoga 
    const result = await studentModel.find({$or:[{age:21},{fees:9999}]}) // define data rhega tou vo show hoga 



    console.log(result)

}

export {getAllDoc,getAllDocSpecificField,getSingleDoc,getSingleDocSpecificField,getDocByField,getLimitedDoc,getDocCount
,getSortedDoc,mixDoc,compDoc,logDoc}


