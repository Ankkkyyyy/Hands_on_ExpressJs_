import mongoose from "mongoose";

const connectDB = (DATABASE_URL) => {

    const DB_OPTIONS ={
        dbName : 'schooldb',
        
    }
    return mongoose.connect( DATABASE_URL,DB_OPTIONS).then(() => {
        console.log('texting db connection ! -> Connected successfully ! ')
    }).catch((error) => {
        console.log(error)
    })
}

export default connectDB