import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv';
const app = express();
dotenv.config();

app.use(morgan('dev'));
const port = process.env.PORT || 8000

        app.listen(port, () => { })
        import mongose from 'mongose'

        mongoose.connect(process.env.MONGO_URI, {
                      useNewUrlParser: true,
                      createIndex: true
        }).then(() => console.log('DB Connected'));

        mongoose.connection.on('error', err => {     
                      console.log(`DB connection error: ${err.message}` )
        })