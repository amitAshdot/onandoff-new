const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
var cors = require('cors');
const app = express();
//Connect Database
connectDB();

// Init middleware
app.use(express.json({extended:false}));

app.use(cors());

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/file', require('./routes/file'));
app.use('/api/timersplus', require('./routes/timersplus'));
app.use('/api/websites', require('./routes/websites'));
app.use('/api/website', require('./routes/singleWebsite'));
app.use('/api/timerplus', require('./routes/singleTimerPlus'));


//Server static assets in production
if(process.env.NODE_ENV === 'production'){
    //Set static folder
    app.use(express.static('client/build'));
    app.get('*', (req,res)=>res.sendFile(path.resolve(__dirname,'client','build','index.html')));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT , ()=> console.log(`server started on PORT ${PORT} `) );
