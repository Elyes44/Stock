import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const produit = new mongoose.Schema({
    nom_produit: String,
    categorie_produit: { type: String, enum:["informatique", "bureatique", "logistique", "personnelle"]},
    etat: {type: String, enum:["en_stock", "hors_stock"]},
    Marque: String,
    Prix: Number,
    Description: String
});
const produits = mongoose.model("produitModel", produit);
 export default  produits