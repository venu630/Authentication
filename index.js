const express = require('express');
const cors = require('cors');
require('dotenv').config()
const {connectToDb} = require("./configs/db")


const  authRoutes  = require('./routes/auth');
const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());


app.use("/auth", authRoutes);

connectToDb((err) => {
    if(!err){
        console.log("connect to DB");
    }
    else{
        console.log("error in connecting DB");
    }
})

app.listen(port, () => {
    console.log('listening on port ' + port);
});
