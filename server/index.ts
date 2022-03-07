import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import routes from './routes';


//Middleware
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    credentials: true,
    origin: function(origin, callback) {
        callback(null, true)
    }
}))
app.use(morgan('dev'))
app.use(cookieParser())

//Routes
app.use('/api', routes.authRouter);
app.use('/api', routes.userRouter);
app.use('/api', routes.categoryRouter);

//Database
import './config/database'

//App listen
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port`, PORT);
})