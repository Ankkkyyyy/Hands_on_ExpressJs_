import mongoose from "mongoose";

const connectDB = (DATABASE_URI ) => {
    return mongoose.connect( DATABASE_URI ).then(() => {
        console.log('texting db connection ! -> Connected successfully ! ')
    }).catch((error) => {
        console.log(error)
    })
}

export default connectDB