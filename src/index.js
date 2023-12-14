import express from 'express';
const app = express()
import { router } from './routes/index.js';

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//routes
app.use("/", router);
app.listen(3000);
console.log("Server on port 3000")
