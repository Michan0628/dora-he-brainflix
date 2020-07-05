const express = require("express");
const app = express();
const cors = require('cors');

// CORS
app.use(cors());

// BODY PARSER MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Member API routes
app.use('/videos', require('./routes/videos'))

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));