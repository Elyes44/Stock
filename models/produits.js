// Importation du module Mongoose pour la gestion de la base de données MongoDB
import mongoose from 'mongoose'
// Importation de la classe Schema depuis Mongoose pour la définition de la structure des données
const Schema = mongoose.Schema;

// Définition du schéma de données pour les messages
const produit = new mongoose.Schema({
    nom_produit: String,
    categorie_produit: ["informatique", "bureatique", "logistique", "personnelle"],
    etat: ["en_stock", "hors_stock"],
    Marque: String,
    Prix: Number,
    Description: String

});

// Création d'un modèle de données basé sur le schéma défini(constructeur) : 
const produits = mongoose.model("produitModel", produit);
// Exportation du modèle pour pouvoir l'utiliser dans d'autres parties de l'application
 export default  produits