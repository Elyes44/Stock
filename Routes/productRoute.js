import express, { Router } from 'express';
//import {produits} from '../../models/produits.js';
import {createPost ,getallProducts } from '../controllers/productController.js';


const roleRoute = () => {
    const router = Router();
    router.post('/addproduct',createPost) 
    router.get('/allproducts',getallProducts)
    return router
}
export default roleRoute

