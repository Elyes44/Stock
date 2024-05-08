import produits from "../models/produits.js";


export const createProduct = async (req, res) => {
    const Produit = new produits(req.body);
    await Produit.save()
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
    await produits.find()
        .then((result) => {
            res.send({ array: result });
            console.log(result);

        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
}

export const deleteProduct = async (req, res) => {
    const id = req.params.id;
    await produits.findByIdAndDelete(id)
        .then((result) => {
            res.sendStatus(200);
            console.log(result);

        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
}

export const updateProduct = async (req, res) => {
    const id = req.params.id
    await produits.findByIdAndUpdate(id, req.body)
        .then((result) => {
            res.status(200).send({ message: "Product updated successfully!" });
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
}