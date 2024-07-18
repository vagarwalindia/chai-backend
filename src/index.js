import { connectDB } from "./db/dbconnect.js";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config(
    {
        path: './env'
    }
);

connectDB().then(()=>{
    app.on("error", (error)=>{
        console.error("Error connecting to database", error);
    })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    })
}).catch((error)=>{
    console.error("Error connecting to database", error);
});
/*import express from "express";

const app = express();

(async ()=>{
    try {
        await pg.connect(`${process.env.POSTGRES_URL}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.error("Error connecting to database", error);
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error connecting to database", error);
    }
})()*/

