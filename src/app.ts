import express from "express"
import mongoose from 'mongoose';
import cors from "cors"
import todoRoutes from "./routes"
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const PORT: string | number = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
app.use(todoRoutes)

const uri: string = process.env.MONGODB_URI || '';
app.listen(PORT, () =>{
  console.log(`Server running on http://localhost:${PORT}`)
  mongoose.connect(uri)
  .then(()=>{
    console.log('DB Connected!')
  }).catch((err)=>{
    console.log(`Error: ${err}`)
  })
})
// mongoose
//   .connect(uri)
//   .then(() =>
    
//   )
//   .catch(error => {
//     throw error
//   })