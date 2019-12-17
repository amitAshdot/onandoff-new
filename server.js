import express, { json, static } from 'express';
import connectDB from './config/db';
import { resolve } from 'path';

const app = express();
//Connect Database
connectDB();

// Init middleware
app.use(json({extended:false}));

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/file', require('./routes/file'));
app.use('/api/timersplus', require('./routes/timersplus').default);
app.use('/api/websites', require('./routes/websites').default);


//Server static assets in production
if(process.env.NODE_ENV === 'production'){
    //Set static folder
    app.use(static('client/build'));
    app.get('*', (req,res)=>res.sendFile(resolve(__dirname,'client','build','index.html')));
}
if (process.env.NODE_ENV !== 'production') {
    app.use(cors())
 }

const PORT = process.env.PORT || 5000;

app.listen(PORT , ()=> console.log(`server started on PORT ${PORT} `) );
