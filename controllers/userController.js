import Users from "../models/users.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"




// User login
export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      // Check if the user exists
      const user = await Users.findOne({ email });
      if (!user) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }
      // Validate the password
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }
      // Generate a JWT token
      const token = jwt.sign({ userId: user._id }, 'secretKey');
      console.log(token)
      res.status(200).json({ token });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ error: 'An error occurred while logging in' });
    }
  };


// User registre
export const adduser = async (req,res)=>{
    const email = req.body.email
    const existingUser = await Users.findOne({email });
    if (existingUser) {
    return res.status(400).json({ error: 'Email already registered !!' });
    }
    const hashpassword = await bcrypt.hash(req.body.password , 10) 
    const NewUser = new Users({ 
        name :req.body.username , 
        password : hashpassword,
        email : email,
    })
    await NewUser.save()
    .then(() => {
        //console.log("User registered successfully !");
        res.status(201).json({ message: 'User registered successfully!' });
    })
    .catch((error) => {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while registering the user!' });
    })

}
// All User 
export const getallUsers = async (req, res) => {
    await Users.find()
        .then((result) => {
            res.send({ array: result });
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
            res.Status(500).send();
        })
}


