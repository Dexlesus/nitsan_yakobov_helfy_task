import express from "express";
import cors from "cors";
import router from "./routes/taskRoute.js";

const app=express();
app.use(cors());
app.use(express.json());
const PORT=4000;
app.use("/api/tasks",router)
app.listen(PORT,(req,res)=>{
    console.log(`The server is running on port ${PORT}`);
})
/// change after that the port to variable or env