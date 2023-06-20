import express from "express";
import bodyParser from "body-parser";
import {Database} from "./src/models/data-source";
import { webRouter } from "./src/routers/web.routers";

const app = express();
const PORT = 5000;

//config:
app.set('view engine', 'ejs');
app.set('views','./src/views');
app.use(bodyParser.urlencoded({extended:true}));

//connect DB
Database.connectDB()
.then(()=>console.log(`DB connected!`))
.catch((error)=>console.log(`DB connect Error : ${error}`));

//router:
app.use("/product",webRouter);

//listen:
app.listen(PORT,"localhost",()=>{
    console.log(`App is running at http://localhost:${PORT}/product/create`);    
})