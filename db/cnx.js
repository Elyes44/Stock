import mongoose from 'mongoose'



const connectDB = () => {
  mongoose.connect('mongodb://127.0.0.1:27017/stock?retryWrites=true&w=majority&appName=stock')
  .then(() => {
    console.log(`Db connected : ${process.env.MONGO_URI} `);
  })
  .catch((err) => { console.log(err) });
}
  export default  connectDB; 
