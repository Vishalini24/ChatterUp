import mongoose from "mongoose";

// Connecting to the Mongodb here.
const url = process.env.MongoDB;

const connectUsingMongoose = async ()=>{
    try {
        await mongoose.connect(url,{
            family:4
        });
        console.log("Mongodb is connected.");
    } catch (error) {
        console.log(error);
    }
}

export default connectUsingMongoose;
