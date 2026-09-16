const express = require("express")
const cors = require("cors");

const app = express();

const datasetRoutes = require("./routes/datasetRoutes");
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
app.use("/dataset",datasetRoutes);




module.exports = app;


