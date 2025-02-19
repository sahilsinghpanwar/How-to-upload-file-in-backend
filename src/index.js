

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import app from "./app.js";


const connectDB = async () => {
    try {
        //  database ka uri      database ka naam
        const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.error("ERROR: ", error);
        throw error
    }
} 

connectDB()

// server set krne k liye
.then(() => {
    app.on("error", (error) => {
        console.log("error", error);
        throw error
        })

        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port ${process.env.PORT}`);
        })


}).catch((error) => {
    console.log("MONGODB connection FAILED!!! : ", error);
});

