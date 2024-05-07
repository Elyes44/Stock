import Users from "../models/users.js"
import jwt from "jsonwebtoken"



export const isAuth = async(req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(401).json({ error: 'Authorization header is missing' });
        }
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.KEY);
        const findUser = await Users.findById(decodedToken.id)
        req.user = findUser
        next();

    } catch (error) {
        console.error('Error authenticating user:', error);
        res.status(401).json({ error: 'Unauthorized' });
    }
};