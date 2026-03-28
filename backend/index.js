const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require("cookie-parser");
const morgan = require('morgan');
const dotenv = require('dotenv');
const helmet = require('helmet');
const logger = require('./utils/logger')

const authrouter = require("./routers/authrouters")
const productrouter = require("./routers/product");
const adminrouter = require("./routers/adminrouters")


dotenv.config(); 

//  Middlewares
app.use(express.json());  // Obejct to JSON parsing middleware
app.use(cors({
  origin: process.env.ALLOWED_FRONTEND_URL,
  credentials: true   
}));
app.use(helmet());  // Security middleware
app.use(cookieParser()); 
app.use(morgan('dev'));  


//  Routes
app.use("/api/auth" , authrouter);
app.use("/api/product" , productrouter);
app.use("/api/admin" , adminrouter);

app.get('/api/user' , (req , res) => {
  res.send("Backend is working")
})



app.listen(process.env.PORT || 5000, () => {
  logger.info("Server start") 
  console.log(`Server running on port 5000`);
});
