import express, { Express } from "express"
import mongoose from 'mongoose';
import cors from "cors"
import todoRoutes from "./routes"
import dotenv from 'dotenv';
dotenv.config();

const app: Express = express();

const PORT: string | number = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
app.use(todoRoutes)

const uri: string = process.env.MONGODB_URI || '';
mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })