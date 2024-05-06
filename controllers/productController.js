import produits from "../models/produits.js";


export const createPost = async (req, res) => {
    const Produit = new produits(req.body);
    Produit.save()
        .then(() => {
            console.log(req.body);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
}

export const getallProducts = async (req, res) => {
    produits.find()
        .then((result) => {
            res.send({ array: result });
            console.log(result);
            
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
}

//export default CrudPost;
// import express from 'express'
// import bodyParser from 'body-parser'
// import { addProduit } from '../services/product_services.js'



// //const prod = prodectService

// const app = express()
// app.use(bodyParser.json())


// export const add = app.post('/addproduct', (req, res) => {
//     addProduit(req.body)
//         .then(() => {
//             console.log(req.body);
//             res.sendStatus(200);
//         })
//         .catch((error) => {
//             console.log(error);
//             res.sendStatus(500);
//         })
// })

