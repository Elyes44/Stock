import { Router } from 'express';
import { isAuth, userRole} from '../middlewares/isAuth.js';
import {
    createProduct ,getallProducts,deleteProduct,updateProduct 
} from '../controllers/productController.js';


const roleRoute = () => {
    const router = Router();
    router.post('/add_product',isAuth,createProduct) 
    router.get('/all_products',userRole('admin'),isAuth,getallProducts)
    router.delete('/del_product/:id',isAuth,deleteProduct) 
    router.put('/update_product/:id',isAuth,updateProduct) 
    return router
}
export default roleRoute

