//import express from "express";
import cors from 'cors';
const express = require('express');
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
//import bookRouter from "./routes/bookRouter";
import { readdirSync } from 'fs'

dotenv.config();
const app = express();

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// routes
//app.use("/api",bookRouter)

// autoload routes
readdirSync('./routes').map((r)=>app.use('/api',require(`./routes/${r}`)))

//db
mongoose.connect(process.env.DATABASE)
.then(()=> console.log('DB connected'))
.catch((err)=>console.error('DB connection is failed',err))

//LISTEN
const port = process.env.PORT || 8000;
app.listen(port,()=>console.log(`server is running on ${port}`))


