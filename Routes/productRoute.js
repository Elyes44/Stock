import { Router } from 'express';
import { isAuth } from '../middlewares/isAuth.js';

import {
    createPost ,getallProducts,deleteProduct,updateProduct 
} from '../controllers/productController.js';


const roleRoute = () => {
    const router = Router();
    router.post('/add_product',isAuth,createPost) 
    router.get('/all_products',isAuth,getallProducts)
    router.delete('/del_product/:id',isAuth,deleteProduct) 
    router.put('/update_product/:id',isAuth,updateProduct) 
    return router
}
export default roleRoute

