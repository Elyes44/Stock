import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import Router from './Routes/index.js'
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

// app.post('/addproduct', (req, res) => {
//     const Produit = new produits(req.body);
//     Produit.save()
//         .then(() => {
//             console.log(req.body);
//             res.sendStatus(200);
//         })
//         .catch((error) => {
//             console.log(error);
//             res.sendStatus(500);
//         })
// })

// app.get('/allproducts', (req, res) => {
//   produits.find()
//         .then((result) => {
//             res.send({ array: result });
//             res.sendStatus(200);
//             console.log(result);
//         })
//         .catch((error) => { console.log(error); res.sendStatus(500); })
// })
