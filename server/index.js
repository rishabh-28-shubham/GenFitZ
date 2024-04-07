const express = require('express')
const app = express();
const cors = require('cors');
const connectDB = require('./config/DB');
const auth = require('./routes/auth')
const list = require('./routes/list')
require('dotenv').config();

const PORT = process.env.PORT;

// connect to DB
connectDB();


// middlewares
app.use(express.json());
app.use(cors());


// routes
app.use('/api/v1' , auth );
app.use('/api/v2' ,list );



app.listen(PORT , () => console.log(`Server started at ${PORT}`));
