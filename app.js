import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from "cors"
import connectDB from './db/cnx.js'
import roleRoute from './Routes/productRoute.js'

// import mongoose from 'mongoose'
// import produits from './models/produits.js'

const app = express();
dotenv.config();
connectDB();

const corsConfig = {
  origin: true,
  credentials: true,
};

app.use(cors(corsConfig));
app.use(bodyParser.json());

app.use('/', roleRoute())
app.listen(process.env.PORT, () => {
  console.log("info", `Server started on port ${process.env.PORT}`);
});
