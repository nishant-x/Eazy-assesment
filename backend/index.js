const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const cookieParser = require("cookie-parser");
const morgan = require('morgan');
const dotenv = require('dotenv');
const helmet = require('helmet');
const logger = require('./utils/logger')

const authrouter = require("./routers/authrouters")
const productrouter = require("./routers/product");


dotenv.config(); // Load environment variables from .env file

//  Middlewares
app.use(express.json());  // Obejct to JSON parsing middleware
app.use(cors({
  origin: process.env.ALLOWED_FRONTEND_URL,
  credentials: true   // IMPORTANT
}));
app.use(helmet());  // Security middleware
app.use(cookieParser());  // object to cookie parsing middleware (important for authentication) 
app.use(morgan('dev'));  // Logger middleware


//  Routes
app.use("/api/auth" , authrouter);
app.use("/api/product" , productrouter);

app.get('/api/user' , (req , res) => {
  res.send("Backend is working")
})

app.listen(port, () => {
  logger.info("Server start") 
  console.log(`Server running on port ${port}`);
});
