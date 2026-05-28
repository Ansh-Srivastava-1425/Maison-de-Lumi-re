import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

const app = express();


// middleware
app.use(cors());
app.use(express.json());


// connect db
connectDB();

// apiendpoint
app.use("/api/food" , foodRouter)


// routes
app.get("/", (req, res) => {
  res.send("API Working");
});


// port
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 