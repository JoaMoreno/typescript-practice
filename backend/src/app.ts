import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

// initializations
const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.get('/', (req, res) =>{
    res.send("Hola")
});

export default app;