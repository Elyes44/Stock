import { Router } from 'express';
import {adduser,getallUsers,login} from '../controllers/userController.js'

const roleRoutes = () => {
    const router = Router();
    router.post('/registre',adduser)
    router.post('/login',login) 
    router.get('/all_users',getallUsers)
    return router
}
export default roleRoutes