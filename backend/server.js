import express  from 'express';
import dotenv  from 'dotenv'
import connectDb from './config/db.js';
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'


dotenv.config()

connectDb()

const app = express();

app.use('/api/products', productRoutes);

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`app running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold));

