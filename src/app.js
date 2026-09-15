const express = require("express")
const cors = require("cors");

const app = express();


const userRouter = require("./routes/userRoutes");

app.use(cors());
app.use(express.json());

app.get("/health",(req,res)=>{
    res.json({
        status:"ok",
        service:"data-intelligence-platform"
    })
});

app.use("/users", userRouter);

const pool = require("./config/database");
pool.query("SELECT * FROM users").then((result=>{
console.log(result.rows);

}))


module.exports = app;


