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

