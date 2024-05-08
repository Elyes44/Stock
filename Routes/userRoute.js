import { Router } from 'express';
import {adduser,getallUsers,login} from '../controllers/userController.js'
import { isAuth, logout, userRole } from '../middlewares/isAuth.js';


const roleRoutes = () => {
    const router = Router();
    router.post('/registre',adduser)
    router.post('/login',login) 
    router.get('/all_users',isAuth,userRole('admin'),getallUsers)
    router.post('/logout',logout)
    
    return router
}
export default roleRoutes