const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { quizRouter } = require("./routes/quizRoutes");
const startCronJobs = require("./utils/cronJobs");
const { userRouter } = require("./routes/userRoutes");


require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
startCronJobs();

//checking
app.get("/", async (req, res) => {
    res.send("welcome ")
})

app.use('/', quizRouter)
app.use('/', userRouter)

app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log("connected to db");
        console.log(`Server is running at ${process.env.port}`)
    } catch (error) {
        console.log("Error connecting to db")
    }
})



