const express=require('express');
const cors=require('cors');
require("dotenv").config();
const connectDB=require("./config/db");
const taskRoutes=require('./routes/taskRoutes');

const app=express();

connectDB();

//middlewares
app.use(cors()); //is a middleware which allows frontend-backend communication

app.use(express.json()); //allows express to understand json sent in req.bodies

app.use("/api/tasks",taskRoutes);

app.get("/",(req,res)=>{
    res.send("Task Tracker API is Running...");
});

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});