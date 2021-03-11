import express from 'express';
import { url } from 'node:inspector';
import path from 'path';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 3031;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());


mongoose.connect(
  process.env.MONGODB_URI || `mongodb://localhost/googleBooks`,
  {useUnifiedTopology: true, useCreateIndex: true, useNewUrlParser: true}
);

app.listen(PORT, () => console.log(`API server is now connected to PORT: ${PORT}`));

