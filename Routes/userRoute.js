import { Router } from 'express';
import {adduser,getallUsers,login,authenticateUser} from '../controllers/userController.js'
import { isAuth } from '../middlewares/isAuth.js';


const roleRoutes = () => {
    const router = Router();
    router.post('/registre',adduser)
    router.post('/login',login) 
    router.get('/all_users',isAuth,getallUsers)
    
    return router
}
export default roleRoutes