import express, { Router } from 'express';
//import {produits} from '../../models/produits.js';
import {
    createPost ,getallProducts,deleteProduct,updateProduct 
} from '../controllers/productController.js';


const roleRoute = () => {
    const router = Router();
    router.post('/add_product',createPost) 
    router.get('/all_products',getallProducts)
    router.delete('/del_product/:id',deleteProduct) 
    router.put('/update_product/:id',updateProduct) 
    return router
}
export default roleRoute

